import Section from '../../../components/ui/Section/Section';
import styles from './OurStory.module.css';

/**
 * NOTE: Copy below is written to be true of almost any independent kebab +
 * Mexican shop (no invented founding date, founder name, or specific
 * anecdotes) so it reads honestly rather than fabricating history. Swap in
 * the real story — how it started, who's behind it, what "Kings" means to
 * them — whenever the client provides it.
 */
function OurStory() {
  return (
    <Section tone="primary">
      <div className={styles.layout}>
        <div>
          <h2 className={styles.heading}>Two Cuisines. One Kitchen. No Compromise.</h2>
          <p className={styles.paragraph}>
            Kings Kebab &amp; Mexican was built on a simple idea: take two of the world&apos;s most
            satisfying cuisines — slow-cooked Turkish kebab and bold Mexican street food — and serve
            them properly, under one roof, without cutting corners on either.
          </p>
          <p className={styles.paragraph}>
            That means doner that&apos;s actually marinated and slow-roasted, not just reheated. Salsa,
            guacamole, and sauces made fresh, not poured from a bottle. Every dish is built the way
            it&apos;s meant to be — generous, fresh, and cooked with care, whether you&apos;re here for a
            quick snack pack or a full kebab plate.
          </p>
          <p className={styles.paragraph}>
            We&apos;re a local, independent kitchen — which means every plate that goes out the door
            has our name on it, and we treat it that way.
          </p>
        </div>

        <img
          src="/images/about/our-story.webp"
          alt="Kings Kebab & Mexican — fresh preparation"
          className={styles.image}
          loading="lazy"
        />
      </div>
    </Section>
  );
}

export default OurStory;
