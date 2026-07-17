import { useEffect, useMemo, useState } from 'react';

/**
 * Tracks which section (by id) is currently active in the viewport, for
 * highlighting the corresponding pill in a sticky category nav.
 * rootMargin is tuned to trigger "active" once a section crosses just below
 * the sticky navbar + category nav stack.
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0]);

  // ids is recreated on every render by the caller (e.g. categories.map(...)),
  // so depend on a stable string key derived from it rather than the array
  // reference itself — avoids re-running the observer setup every render.
  const idsKey = useMemo(() => ids.join(','), [ids]);

  useEffect(() => {
    const elements = idsKey.split(',').map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [idsKey]);

  return activeId;
}
