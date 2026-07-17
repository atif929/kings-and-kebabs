import { FiZoomIn } from 'react-icons/fi';
import styles from './GalleryGrid.module.css';

function GalleryGrid({ items, onSelect }) {
  if (items.length === 0) {
    return <p className={styles.empty}>No photos in this category yet.</p>;
  }

  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <button
          key={item.id}
          type="button"
          className={styles.tile}
          onClick={() => onSelect(index)}
          aria-label={`View photo: ${item.caption}`}
        >
          <img src={item.src} alt={item.caption} className={styles.photo} loading="lazy" />
          <span className={styles.overlay}>
            <FiZoomIn aria-hidden="true" />
            <span className={styles.caption}>{item.caption}</span>
          </span>
        </button>
      ))}
    </div>
  );
}

export default GalleryGrid;
