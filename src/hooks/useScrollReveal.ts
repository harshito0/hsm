'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            (entry.target as HTMLElement).dataset.visible = 'true';
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      elements.forEach((el) => {
        if ((el as HTMLElement).dataset.visible === 'true') {
          el.classList.add('visible');
        } else {
          observer.observe(el);
        }
      });
    };

    observeAll();

    // Observe newly added or updated elements
    const mutObserver = new MutationObserver(() => {
      observeAll();
    });

    mutObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutObserver.disconnect();
    };
  }, []);
}

