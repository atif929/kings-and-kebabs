import styles from './GalleryFilters.module.css';

function GalleryFilters({ categories, activeCategory, onChange }) {
  return (
    <div className={styles.filters} role="tablist" aria-label="Filter gallery">
      {categories.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          role="tab"
          aria-selected={activeCategory === id}
          className={`${styles.pill} ${activeCategory === id ? styles.active : ''}`}
          onClick={() => onChange(id)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default GalleryFilters;
