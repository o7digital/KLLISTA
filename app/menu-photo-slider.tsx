"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

const SLIDER_GAP = 16;
const MIN_ZOOM = 0.75;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;
const photoNumbers = [1, 10, 11, 17, 18, 20, 21, 24, 25] as const;
const photos = photoNumbers.map(
  (number) => `/slider/photo-${String(number).padStart(2, "0")}.jpeg`,
);

type MenuPhotoSliderProps = {
  label: string;
  imageAlt: string;
  previousLabel: string;
  nextLabel: string;
  openLabel: string;
  lightboxLabel: string;
  closeLabel: string;
  zoomInLabel: string;
  zoomOutLabel: string;
  resetZoomLabel: string;
};

export function MenuPhotoSlider({
  label,
  imageAlt,
  previousLabel,
  nextLabel,
  openLabel,
  lightboxLabel,
  closeLabel,
  zoomInLabel,
  zoomOutLabel,
  resetZoomLabel,
}: MenuPhotoSliderProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartRef = useRef<number | null>(null);
  const didSwipeRef = useRef(false);
  const [activeTrackSlide, setActiveTrackSlide] = useState(3);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [slideWidth, setSlideWidth] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const isLightboxOpen = lightboxIndex !== null;

  const renderedPhotos = useMemo(() => {
    const originals = photos.map((src, index) => ({ src, originalIndex: index, clone: false, key: `photo-${index}` }));
    const before = photos.slice(-visibleSlides).map((src, index) => ({
      src,
      originalIndex: photos.length - visibleSlides + index,
      clone: true,
      key: `before-${index}`,
    }));
    const after = photos.slice(0, visibleSlides).map((src, index) => ({
      src,
      originalIndex: index,
      clone: true,
      key: `after-${index}`,
    }));
    return [...before, ...originals, ...after];
  }, [visibleSlides]);

  const activeSlide = (
    (activeTrackSlide - visibleSlides) % photos.length + photos.length
  ) % photos.length;

  const moveSlider = useCallback((direction: -1 | 1) => {
    if (isAnimating || slideWidth === 0) return;

    if (prefersReducedMotion) {
      setTransitionEnabled(false);
      setActiveTrackSlide((current) => {
        const currentPhoto = ((current - visibleSlides) % photos.length + photos.length) % photos.length;
        const nextPhoto = (currentPhoto + direction + photos.length) % photos.length;
        return visibleSlides + nextPhoto;
      });
      return;
    }

    setTransitionEnabled(true);
    setIsAnimating(true);
    setActiveTrackSlide((current) => current + direction);
  }, [isAnimating, prefersReducedMotion, slideWidth, visibleSlides]);

  const openLightbox = (index: number) => {
    if (didSwipeRef.current) {
      didSwipeRef.current = false;
      return;
    }
    setZoom(1);
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    setZoom(1);
  }, []);

  const changeLightboxPhoto = useCallback((direction: -1 | 1) => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return (current + direction + photos.length) % photos.length;
    });
    setZoom(1);
  }, []);

  const changeZoom = useCallback((direction: -1 | 1) => {
    setZoom((current) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, current + direction * ZOOM_STEP)));
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateLayout = () => {
      const nextVisibleSlides = viewport.clientWidth <= 720 ? 1 : 3;
      const nextSlideWidth = (
        viewport.clientWidth - SLIDER_GAP * (nextVisibleSlides - 1)
      ) / nextVisibleSlides;

      setTransitionEnabled(false);
      setIsAnimating(false);
      setVisibleSlides(nextVisibleSlides);
      setSlideWidth(nextSlideWidth);
      setActiveTrackSlide(nextVisibleSlides);
    };

    updateLayout();
    const observer = new ResizeObserver(updateLayout);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(motionPreference.matches);

    updatePreference();
    motionPreference.addEventListener("change", updatePreference);
    return () => motionPreference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isHovered || hasFocus || prefersReducedMotion || isLightboxOpen || photos.length <= 1) return;

    const interval = window.setInterval(() => moveSlider(1), 4000);
    return () => window.clearInterval(interval);
  }, [hasFocus, isHovered, isLightboxOpen, moveSlider, prefersReducedMotion]);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") changeLightboxPhoto(-1);
      if (event.key === "ArrowRight") changeLightboxPhoto(1);
      if (event.key === "+" || event.key === "=") changeZoom(1);
      if (event.key === "-") changeZoom(-1);
      if (event.key === "0") setZoom(1);

      if (event.key === "Tab" && lightboxRef.current) {
        const buttons = Array.from(
          lightboxRef.current.querySelectorAll<HTMLButtonElement>("button:not(:disabled)"),
        );
        if (buttons.length === 0) return;
        const firstButton = buttons[0];
        const lastButton = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === firstButton) {
          event.preventDefault();
          lastButton.focus();
        } else if (!event.shiftKey && document.activeElement === lastButton) {
          event.preventDefault();
          firstButton.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [changeLightboxPhoto, changeZoom, closeLightbox, isLightboxOpen]);

  const handleTrackTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;

    if (activeTrackSlide >= photos.length + visibleSlides) {
      setTransitionEnabled(false);
      setActiveTrackSlide(activeTrackSlide - photos.length);
    } else if (activeTrackSlide < visibleSlides) {
      setTransitionEnabled(false);
      setActiveTrackSlide(activeTrackSlide + photos.length);
    }
    setIsAnimating(false);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartRef.current = event.touches[0]?.clientX ?? null;
    didSwipeRef.current = false;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    const distance = (event.changedTouches[0]?.clientX ?? touchStartRef.current) - touchStartRef.current;
    touchStartRef.current = null;
    if (Math.abs(distance) < 45) return;
    didSwipeRef.current = true;
    moveSlider(distance > 0 ? -1 : 1);
  };

  const lightbox = lightboxIndex === null ? null : (
    <div
      className="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={lightboxLabel}
      ref={lightboxRef}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeLightbox();
      }}
    >
      <span className="gallery-lightbox-count" aria-live="polite">
        {String(lightboxIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
      </span>
      <button
        className="gallery-lightbox-close"
        type="button"
        onClick={closeLightbox}
        aria-label={closeLabel}
        ref={closeButtonRef}
      >
        ×
      </button>

      <div className="gallery-lightbox-stage">
        <div className="gallery-lightbox-canvas">
          <button
            className="gallery-lightbox-image"
            type="button"
            onClick={() => setZoom((current) => current > 1 ? 1 : 2)}
            aria-label={zoom > 1 ? resetZoomLabel : zoomInLabel}
            style={{
              width: `min(${82 * zoom}vw, ${1400 * zoom}px)`,
              height: `min(${78 * zoom}vh, ${900 * zoom}px)`,
            }}
          >
            <Image
              fill
              src={photos[lightboxIndex]}
              alt={`${imageAlt} ${lightboxIndex + 1}`}
              sizes="100vw"
            />
          </button>
        </div>
      </div>

      <button
        className="gallery-lightbox-arrow gallery-lightbox-previous"
        type="button"
        onClick={() => changeLightboxPhoto(-1)}
        aria-label={previousLabel}
      >
        ←
      </button>
      <button
        className="gallery-lightbox-arrow gallery-lightbox-next"
        type="button"
        onClick={() => changeLightboxPhoto(1)}
        aria-label={nextLabel}
      >
        →
      </button>

      <div className="gallery-lightbox-zoom" aria-label={`${zoomInLabel} / ${zoomOutLabel}`}>
        <button type="button" onClick={() => changeZoom(-1)} disabled={zoom <= MIN_ZOOM} aria-label={zoomOutLabel}>−</button>
        <button type="button" onClick={() => setZoom(1)} aria-label={resetZoomLabel}>{Math.round(zoom * 100)}%</button>
        <button type="button" onClick={() => changeZoom(1)} disabled={zoom >= MAX_ZOOM} aria-label={zoomInLabel}>+</button>
      </div>

      <div className="gallery-lightbox-thumbnails">
        {photos.map((photo, index) => (
          <button
            className={index === lightboxIndex ? "is-active" : undefined}
            type="button"
            onClick={() => {
              setLightboxIndex(index);
              setZoom(1);
            }}
            aria-label={`${openLabel} ${index + 1}`}
            aria-current={index === lightboxIndex ? "true" : undefined}
            key={photo}
          >
            <Image fill src={photo} alt="" sizes="100px" />
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div
        className={`photo-slider${slideWidth > 0 ? " is-ready" : ""}`}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setHasFocus(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
        }}
      >
        <div className="photo-slider-viewport" ref={viewportRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div
            className="photo-slider-track"
            onTransitionEnd={handleTrackTransitionEnd}
            style={{
              gap: `${SLIDER_GAP}px`,
              transform: `translate3d(-${activeTrackSlide * (slideWidth + SLIDER_GAP)}px, 0, 0)`,
              transition: transitionEnabled && !prefersReducedMotion
                ? "transform 650ms cubic-bezier(0.65, 0, 0.2, 1)"
                : "none",
            }}
          >
            {renderedPhotos.map((photo) => (
              <button
                className="photo-slide"
                type="button"
                aria-label={`${openLabel} ${photo.originalIndex + 1}`}
                aria-hidden={photo.clone || undefined}
                tabIndex={photo.clone ? -1 : 0}
                onClick={() => openLightbox(photo.originalIndex)}
                style={{ flexBasis: slideWidth > 0 ? `${slideWidth}px` : undefined }}
                key={photo.key}
              >
                <Image
                  fill
                  src={photo.src}
                  alt={photo.clone ? "" : `${imageAlt} ${photo.originalIndex + 1}`}
                  sizes="(max-width: 720px) calc(100vw - 36px), 33vw"
                />
                <span className="photo-slide-expand" aria-hidden="true">＋</span>
              </button>
            ))}
          </div>
        </div>

        <div className="photo-slider-controls">
          <span aria-hidden="true">
            {String(activeSlide + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
          </span>
          <div className="photo-slider-progress" aria-hidden="true">
            <i style={{ width: `${((activeSlide + 1) / photos.length) * 100}%` }} />
          </div>
          <div className="photo-slider-buttons">
            <button type="button" onClick={() => moveSlider(-1)} aria-label={previousLabel}>←</button>
            <button type="button" onClick={() => moveSlider(1)} aria-label={nextLabel}>→</button>
          </div>
        </div>
      </div>
      {lightbox && createPortal(lightbox, document.body)}
    </>
  );
}
