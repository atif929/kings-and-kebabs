import { useActiveSection } from '../../../hooks/useActiveSection';
import styles from './CategoryNav.module.css';

function CategoryNav({ categories }) {
  const categoryIds = categories.map((c) => c.id);
  const activeId = useActiveSection(categoryIds);

  return (
    <nav className={styles.nav} aria-label="Menu categories">
      <ul className={styles.list}>
        {categories.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} className={`${styles.pill} ${activeId === id ? styles.active : ''}`}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryNav;
