"use client";

import { useEffect } from "react";

function getNavOffset() {
  return window.innerWidth < 768 ? 78 : 96;
}

function getScrollBehavior(): ScrollBehavior {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return "auto";
  }

  return "smooth";
}

function scrollToCurrentHash() {
  const hash = window.location.hash;

  if (!hash) {
    return;
  }

  const id = decodeURIComponent(hash.slice(1));
  const target = document.getElementById(id);

  if (!target) {
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - getNavOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: getScrollBehavior() });
}

export function AnchorScroll() {
  useEffect(() => {
    const syncHashPosition = () => {
      requestAnimationFrame(scrollToCurrentHash);
      window.setTimeout(scrollToCurrentHash, 120);
    };

    syncHashPosition();
    window.addEventListener("hashchange", syncHashPosition);

    return () => window.removeEventListener("hashchange", syncHashPosition);
  }, []);

  return null;
}
