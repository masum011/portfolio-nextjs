"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";
import { btnAccentLg, container, link } from "@/lib/ui";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionHrefs = [...navItems.map((item) => item.href), "#contact"];
    const sections = sectionHrefs
      .map((href) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const currentSection = visibleSections[0]?.target;

        if (currentSection instanceof HTMLElement) {
          setActiveHref(`#${currentSection.id}`);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const menuButton = menuButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      menuButton?.focus();
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-line bg-bg/95 backdrop-blur-md">
        <div className={`${container} flex items-center justify-between gap-5 py-5 sm:py-7`}>
          <a
            href="#top"
            className="inline-flex items-center gap-3 font-display text-lg font-bold text-ink sm:text-xl"
          >
            <span className="inline-flex size-9 items-center justify-center rounded-[10px] bg-accent text-[15px] text-bg">
              {profile.initials}
            </span>
            {profile.name}
          </a>

          <nav className="hidden items-center gap-7 text-sm sm:flex" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={isActive ? "font-medium text-accent" : link}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setActiveHref(item.href)}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              className={`inline-flex min-h-11 items-center rounded-full border px-5 font-medium ${
                activeHref === "#contact"
                  ? "border-accent text-accent"
                  : "border-line-2 text-ink hover:border-muted"
              }`}
              aria-current={activeHref === "#contact" ? "location" : undefined}
              onClick={() => setActiveHref("#contact")}
            >
              Hire me
            </a>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line-2 text-ink hover:border-muted sm:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="size-5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close navigation menu"
              className="absolute inset-0 size-full bg-ink/30 backdrop-blur-sm"
              onClick={closeMenu}
            />
            <motion.aside
              id="mobile-navigation"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="absolute right-0 top-0 flex h-full w-[min(88vw,22rem)] flex-col overflow-y-auto border-l border-line bg-bg p-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-ink">Navigation</span>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-line-2 text-ink hover:border-muted"
                  aria-label="Close navigation menu"
                  onClick={closeMenu}
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="size-5"
                  >
                    <path d="m6 6 12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-2" aria-label="Mobile primary">
                {navItems.map((item) => {
                  const isActive = activeHref === item.href;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`flex min-h-12 items-center rounded-xl px-4 text-base font-medium ${
                        isActive
                          ? "bg-surface-2 text-accent"
                          : "text-ink hover:bg-surface-2 hover:text-accent"
                      }`}
                      aria-current={isActive ? "location" : undefined}
                      onClick={() => {
                        setActiveHref(item.href);
                        closeMenu();
                      }}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  className={`${btnAccentLg} mt-4 justify-center ${
                    activeHref === "#contact" ? "ring-2 ring-accent ring-offset-2 ring-offset-bg" : ""
                  }`}
                  aria-current={activeHref === "#contact" ? "location" : undefined}
                  onClick={() => {
                    setActiveHref("#contact");
                    closeMenu();
                  }}
                >
                  Hire me
                </a>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
