"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${(i % 4) * 0.08}s`;
      observer.observe(el);
    });

    // Immediate reveal for hero elements
    setTimeout(() => {
      document.querySelectorAll(".hero-immediate .reveal").forEach((el) => {
        el.classList.add("visible");
      });
    }, 150);

    return () => observer.disconnect();
  }, []);

  return null;
}
