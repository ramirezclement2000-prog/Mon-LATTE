"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type SectionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: `#${string}`;
};

function alignToSection(target: HTMLElement) {
  const navOffset = window.innerWidth < 768 ? 78 : 96;
  const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
  const previousScrollBehavior = document.documentElement.style.scrollBehavior;

  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
  document.documentElement.style.scrollBehavior = previousScrollBehavior;
}

export function SectionLink({ children, href, onClick, ...props }: SectionLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    const target = document.getElementById(href.slice(1));

    if (!target) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", href);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        alignToSection(target);
        window.setTimeout(() => alignToSection(target), 120);
        window.setTimeout(() => alignToSection(target), 480);
      });
    });
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
