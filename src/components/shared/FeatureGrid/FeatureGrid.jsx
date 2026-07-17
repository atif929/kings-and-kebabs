import styles from './FeatureGrid.module.css';

/**
 * items: { icon: IconComponent, title: string, description: string }[]
 * Renders a responsive grid — 1 column mobile, N columns desktop based on item count (max 4).
 */
function FeatureGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map(({ icon: Icon, title, description }) => (
        <div key={title} className={styles.feature}>
          <Icon className={styles.icon} aria-hidden="true" />
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      ))}
    </div>
  );
}

export default FeatureGrid;
