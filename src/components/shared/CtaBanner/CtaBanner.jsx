import Container from '../../ui/Container/Container';
import Button from '../../ui/Button/Button';
import styles from './CtaBanner.module.css';

function CtaBanner({ heading, subheading, buttonLabel, buttonTo }) {
  return (
    <section className={styles.banner}>
      <Container className={styles.inner}>
        <h2 className={styles.heading}>{heading}</h2>
        {subheading && <p className={styles.subheading}>{subheading}</p>}
        <Button to={buttonTo} variant="primary" size="lg">
          {buttonLabel}
        </Button>
      </Container>
    </section>
  );
}

export default CtaBanner;
