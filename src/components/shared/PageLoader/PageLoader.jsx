import styles from './PageLoader.module.css';

function PageLoader() {
  return (
    <div className={styles.wrapper} role="status" aria-label="Loading page">
      <span className={styles.spinner} />
    </div>
  );
}

export default PageLoader;
