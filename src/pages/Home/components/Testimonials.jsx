import { FaStar } from 'react-icons/fa';
import { TESTIMONIALS } from '../../../data/testimonialsData';
import Section from '../../../components/ui/Section/Section';
import styles from './Testimonials.module.css';

// Intentionally renders nothing if TESTIMONIALS is empty rather than
// showing placeholder/fabricated quotes on a real business site.
// Populate src/data/testimonialsData.js with real reviews to activate this section.
function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <Section tone="elevated">
      <p className="eyebrow">What People Are Saying</p>
      <h2 className={styles.heading}>Loved By Our Customers</h2>

      <div className={styles.grid}>
        {TESTIMONIALS.map(({ id, quote, author, rating }) => (
          <blockquote key={id} className={styles.card}>
            <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className={i < rating ? styles.starFilled : styles.starEmpty} aria-hidden="true" />
              ))}
            </div>
            <p className={styles.quote}>&ldquo;{quote}&rdquo;</p>
            <cite className={styles.author}>{author}</cite>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}

export default Testimonials;
