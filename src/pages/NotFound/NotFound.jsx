import { useEffect } from 'react';
import { ROUTES } from '../../constants/routes';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import Container from '../../components/ui/Container/Container';
import Button from '../../components/ui/Button/Button';
import styles from './NotFound.module.css';

function NotFound() {
  useDocumentMeta('Page Not Found', undefined);

  // 404 pages shouldn't be indexed — restore the default "index, follow"
  // robots directive on unmount so normal pages aren't affected.
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'noindex, follow');
    return () => meta.setAttribute('content', 'index, follow');
  }, []);

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <p className={styles.code}>404</p>
        <h1 className={styles.heading}>This Page Isn&apos;t On The Menu.</h1>
        <p className={styles.description}>
          The page you&apos;re looking for doesn&apos;t exist, may have moved, or the link might be broken.
        </p>
        <div className={styles.actions}>
          <Button to={ROUTES.HOME} variant="primary" size="lg">
            Back To Home
          </Button>
          <Button to={ROUTES.MENU} variant="secondary" size="lg">
            View Menu
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default NotFound;
