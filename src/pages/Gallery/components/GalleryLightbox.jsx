import { useEffect, useRef } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import styles from './GalleryLightbox.module.css';

function GalleryLightbox({ items, activeIndex, onClose, onNavigate }) {
  const closeButtonRef = useRef(null);
  const item = items[activeIndex];

  useLockBodyScroll(true);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onNavigate(-1);
      if (event.key === 'ArrowRight') onNavigate(1);
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  if (!item) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={item.caption} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button ref={closeButtonRef} type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <FiX />
        </button>

        <button
          type="button"
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={() => onNavigate(-1)}
          aria-label="Previous photo"
        >
          <FiChevronLeft />
        </button>

        <div className={styles.imageArea}>
          <img src={item.src} alt={item.caption} className={styles.photo} />
          <p className={styles.caption}>{item.caption}</p>
        </div>

        <button
          type="button"
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={() => onNavigate(1)}
          aria-label="Next photo"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default GalleryLightbox;
