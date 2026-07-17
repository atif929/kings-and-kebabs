import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import styles from './Logo.module.css';

/**
 * Text-based wordmark. Swap for an <img> once a brand mark exists —
 * kept as a single component so that swap happens in one place only.
 */
function Logo({ size = 'md' }) {
  return (
    <Link to={ROUTES.HOME} className={`${styles.logo} ${styles[size]}`} aria-label="Kings Kebab & Mexican — Home">
      <span className={styles.primary}>KINGS KEBAB</span>
      <span className={styles.secondary}>&amp; MEXICAN</span>
    </Link>
  );
}

export default Logo;
