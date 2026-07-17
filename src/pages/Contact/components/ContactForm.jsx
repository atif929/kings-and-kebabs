import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { BUSINESS } from '../../../constants/business';
import FormField from '../../../components/ui/FormField/FormField';
import Button from '../../../components/ui/Button/Button';
import styles from './ContactForm.module.css';

const EMPTY_FORM = { name: '', email: '', phone: '', message: '' };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.message.trim()) errors.message = 'Please enter a message.';
  return errors;
}

/**
 * No backend/email-API is wired up yet (per the project's phased build —
 * see README "Future Scalability"). Submitting builds a mailto: link with
 * the form contents pre-filled and opens the user's mail client — a real,
 * working mechanism today, not a fake "message sent" state. Replace the
 * handleSubmit body with a fetch() to a real backend/email service
 * (FastAPI, Node, Formspree, etc.) once one exists, and the form/validation
 * above needs no changes.
 */
function ContactForm() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [hasOpenedMailClient, setHasOpenedMailClient] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const subject = encodeURIComponent(`Website enquiry from ${values.name}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone || 'Not provided'}\n\n${values.message}`,
    );
    window.location.href = `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;

    setHasOpenedMailClient(true);
    setValues(EMPTY_FORM);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <FormField label="Name" name="name" value={values.name} onChange={handleChange} error={errors.name} required />
      <FormField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        required
      />
      <FormField label="Phone (optional)" name="phone" type="tel" value={values.phone} onChange={handleChange} />
      <FormField
        label="Message"
        name="message"
        type="textarea"
        value={values.message}
        onChange={handleChange}
        error={errors.message}
        required
      />

      <Button type="submit" variant="primary" size="lg" icon={FiSend}>
        Send Message
      </Button>

      {hasOpenedMailClient && (
        <p className={styles.confirmation} role="status">
          Your email client should now be open with your message ready to send.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
