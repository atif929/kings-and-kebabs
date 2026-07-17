import Section from '../../ui/Section/Section';
import styles from './LegalContent.module.css';

/**
 * sections: { heading: string, paragraphs: string[] }[]
 * reviewNote is shown by default because the content populating this
 * component (Privacy Policy / Terms & Conditions) is a general template,
 * not legal advice — it should stay visible until a lawyer has reviewed
 * and the client explicitly signs off on removing it.
 */
function LegalContent({ lastUpdated, sections, reviewNote = true }) {
  return (
    <Section tone="primary">
      <div className={styles.wrapper}>
        {reviewNote && (
          <p className={styles.reviewNote}>
            This page is a general template and has not been reviewed by a lawyer. It should be
            reviewed for compliance with applicable law before this site goes live.
          </p>
        )}
        <p className={styles.updated}>Last updated: {lastUpdated}</p>

        {sections.map(({ heading, paragraphs }) => (
          <div key={heading} className={styles.block}>
            <h2 className={styles.heading}>{heading}</h2>
            {paragraphs.map((paragraph, i) => (
              <p key={i} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default LegalContent;
