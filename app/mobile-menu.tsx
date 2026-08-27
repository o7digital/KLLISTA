"use client";

import { useEffect, useRef, useState } from "react";

type NavigationItem = {
  href: string;
  label: string;
};

export function MobileMenu({
  items,
  cta,
  language,
}: {
  items: readonly NavigationItem[];
  cta: string;
  language: "es" | "en";
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuLabel = language === "en" ? "Navigation menu" : "Menú de navegación";

  useEffect(() => {
    if (!isOpen) return;

    function closeOnOutsideClick(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) setIsOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <div className="mobile-menu" ref={menuRef}>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={menuLabel}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      {isOpen && (
        <div className="mobile-menu-panel" id="mobile-navigation">
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="mobile-menu-cta" href="#contacto" onClick={() => setIsOpen(false)}>
            {cta} <span>↗</span>
          </a>
        </div>
      )}
    </div>
  );
}