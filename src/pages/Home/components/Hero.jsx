import { FiArrowDown } from 'react-icons/fi';
import { ROUTES } from '../../../constants/routes';
import Container from '../../../components/ui/Container/Container';
import Button from '../../../components/ui/Button/Button';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <Container className={styles.inner}>
        <p className={`eyebrow ${styles.eyebrow}`}>Kings Kebab &amp; Mexican</p>
        <h1 className={styles.headline}>
          Where Bold Kebab Flavors
          <br />
          Meet Mexican Zest.
        </h1>
        <p className={styles.subheadline}>
          Slow-cooked doner, fresh-fired Mexican classics, and generous snack packs — made fresh,
          served fast, every single day.
        </p>
        <div className={styles.actions}>
          <Button to={ROUTES.MENU} variant="primary" size="lg">
            View Menu &amp; Order
          </Button>
          <Button to={ROUTES.CONTACT} variant="secondary" size="lg">
            Find Our Location
          </Button>
        </div>
      </Container>
      <a href="#trust-strip" className={styles.scrollCue} aria-label="Scroll to more information">
        <FiArrowDown />
      </a>
    </section>
  );
}

export default Hero;
