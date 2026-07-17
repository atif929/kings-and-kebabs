import Container from '../../ui/Container/Container';
import styles from './PageHeader.module.css';

function PageHeader({ eyebrow, title, description }) {
  return (
    <header className={styles.header}>
      <Container>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </Container>
    </header>
  );
}

export default PageHeader;
