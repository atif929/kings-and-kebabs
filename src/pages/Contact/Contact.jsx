import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import PageHeader from '../../components/shared/PageHeader/PageHeader';
import Section from '../../components/ui/Section/Section';
import ContactInfo from './components/ContactInfo';
import ContactMap from './components/ContactMap';
import ContactForm from './components/ContactForm';
import styles from './Contact.module.css';

function Contact() {
  useDocumentMeta('Contact', 'Get in touch, find our location, hours, and send us a message.');

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get In Touch"
        description="Questions, catering, feedback, or just say hi — we'd love to hear from you."
      />

      <Section tone="primary">
        <div className={styles.layout}>
          <div className={styles.column}>
            <ContactInfo />
            <ContactMap />
          </div>
          <div className={styles.column}>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}

export default Contact;
