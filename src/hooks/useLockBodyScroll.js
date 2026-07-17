import { useEffect } from 'react';

/** Locks background scroll while `isLocked` is true (mobile menu open, modals, etc). */
export function useLockBodyScroll(isLocked) {
  useEffect(() => {
    if (!isLocked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [isLocked]);
}
