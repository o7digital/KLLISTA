"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const PHOTO_COUNT = 25;
const SLIDER_GAP = 16;
const photos = Array.from(
  { length: PHOTO_COUNT },
  (_, index) => `/slider/photo-${String(index + 1).padStart(2, "0")}.jpeg`,
);

type MenuPhotoSliderProps = {
  label: string;
  imageAlt: string;
  previousLabel: string;
  nextLabel: string;
};

export function MenuPhotoSlider({
  label,
  imageAlt,
  previousLabel,
  nextLabel,
}: MenuPhotoSliderProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const lastSlide = Math.max(0, photos.length - visibleSlides);

  const goToSlide = useCallback((slide: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const nextSlide = slide > lastSlide ? 0 : slide < 0 ? lastSlide : slide;
    const slideWidth = (viewport.clientWidth - SLIDER_GAP * (visibleSlides - 1)) / visibleSlides;

    viewport.scrollTo({
      left: nextSlide * (slideWidth + SLIDER_GAP),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
    setActiveSlide(nextSlide);
  }, [lastSlide, prefersReducedMotion, visibleSlides]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateLayout = () => {
      const nextVisibleSlides = viewport.clientWidth <= 720 ? 1 : 3;
      setVisibleSlides(nextVisibleSlides);
      setActiveSlide(0);
      viewport.scrollTo({ left: 0, behavior: "auto" });
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
    if (isHovered || hasFocus || prefersReducedMotion || lastSlide === 0) return;

    const interval = window.setInterval(() => goToSlide(activeSlide + 1), 4000);
    return () => window.clearInterval(interval);
  }, [activeSlide, goToSlide, hasFocus, isHovered, lastSlide, prefersReducedMotion]);

  const handleScroll = () => {
    if (scrollFrameRef.current !== null) window.cancelAnimationFrame(scrollFrameRef.current);
    scrollFrameRef.current = window.requestAnimationFrame(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const slideWidth = (viewport.clientWidth - SLIDER_GAP * (visibleSlides - 1)) / visibleSlides;
      setActiveSlide(Math.min(lastSlide, Math.round(viewport.scrollLeft / (slideWidth + SLIDER_GAP))));
    });
  };

  useEffect(() => () => {
    if (scrollFrameRef.current !== null) window.cancelAnimationFrame(scrollFrameRef.current);
  }, []);

  return (
    <div
      className="photo-slider"
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
      <div className="photo-slider-viewport" ref={viewportRef} onScroll={handleScroll}>
        <div className="photo-slider-track">
          {photos.map((photo, index) => (
            <figure
              className="photo-slide"
              role="group"
              aria-label={`${index + 1} / ${photos.length}`}
              key={photo}
            >
              <Image
                fill
                src={photo}
                alt={`${imageAlt} ${index + 1}`}
                sizes="(max-width: 720px) calc(100vw - 36px), 33vw"
              />
            </figure>
          ))}
        </div>
      </div>

      <div className="photo-slider-controls">
        <span aria-hidden="true">
          {String(activeSlide + 1).padStart(2, "0")} / {String(lastSlide + 1).padStart(2, "0")}
        </span>
        <div className="photo-slider-progress" aria-hidden="true">
          <i style={{ width: `${((activeSlide + 1) / (lastSlide + 1)) * 100}%` }} />
        </div>
        <div className="photo-slider-buttons">
          <button type="button" onClick={() => goToSlide(activeSlide - 1)} aria-label={previousLabel}>←</button>
          <button type="button" onClick={() => goToSlide(activeSlide + 1)} aria-label={nextLabel}>→</button>
        </div>
      </div>
    </div>
  );
}
