import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, isInView]. isInView flips to true the first time the
 * element crosses the given threshold, then stays true (no re-triggering
 * on scroll back up — reveal animations should happen once).
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
}
