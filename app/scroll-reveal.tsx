'use client';

import { useEffect } from 'react';

export function ScrollReveal() {
  useEffect(() => {
    const items = [...document.querySelectorAll('[data-reveal] > :not([data-reveal])')].filter((item) => item instanceof HTMLElement);
    const sync = () => {
      const screen = window.innerHeight;
      const positions = items.map((item) => ({ item, rect: item.getBoundingClientRect() }));
      let order = 0;
      for (const { item, rect } of positions) {
        if (rect.top >= screen) {
          // Only items below the screen reset, so nothing on screen flashes and each item replays on the way back down.
          if (item.dataset.revealState !== 'hidden') item.dataset.revealState = 'hidden';
        } else if (item.dataset.revealState === 'hidden' && (rect.top <= screen * 0.9 || rect.top + rect.height * 0.9 <= screen)) {
          item.style.setProperty('--reveal-delay', `${Math.min(order, 5) * 90}ms`);
          item.dataset.revealState = 'visible';
          order += 1;
        }
      }
    };
    // Each signal re-checks every item, so an item still resets when a jump skips straight past it. Mostly visible
    // counts as revealed too, since the last items on the page never reach the 90% line.
    const lineObserver = new IntersectionObserver(sync, { rootMargin: '0px 0px -10% 0px' });
    const screenObserver = new IntersectionObserver(sync, { threshold: [0, 0.9] });

    for (const item of items) {
      lineObserver.observe(item);
      screenObserver.observe(item);
    }

    return () => {
      lineObserver.disconnect();
      screenObserver.disconnect();
    };
  }, []);

  return null;
}
