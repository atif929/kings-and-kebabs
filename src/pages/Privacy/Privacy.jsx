import PageHeader from '../../components/shared/PageHeader/PageHeader';
import LegalContent from '../../components/shared/LegalContent/LegalContent';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { BUSINESS } from '../../constants/business';

const SECTIONS = [
  {
    heading: '1. Introduction',
    paragraphs: [
      `${BUSINESS.name} ("we", "us", "our") respects your privacy. This policy explains what information we collect through this website, how we use it, and the choices you have. It is intended to be consistent with the Australian Privacy Principles under the Privacy Act 1988 (Cth).`,
    ],
  },
  {
    heading: '2. Information We Collect',
    paragraphs: [
      'When you use the contact form on this website, we collect the information you provide directly: your name, email address, phone number (if given), and the content of your message.',
      'We do not use tracking cookies or analytics on this website at this time. If that changes in the future (for example, adding Google Analytics), this policy will be updated to disclose it.',
    ],
  },
  {
    heading: '3. Third-Party Services',
    paragraphs: [
      'This website loads fonts from Google Fonts and, on the Contact page, may embed a Google Map. These third-party services may process technical data such as your IP address in order to serve content, in accordance with their own privacy policies.',
    ],
  },
  {
    heading: '4. How We Use Your Information',
    paragraphs: [
      'Information submitted through the contact form is used only to respond to your enquiry. We do not sell or rent your personal information to third parties.',
    ],
  },
  {
    heading: '5. Data Security',
    paragraphs: [
      'We take reasonable steps to protect the information you provide from misuse, loss, and unauthorised access. No method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    heading: '6. Your Rights',
    paragraphs: [
      'You may request access to, correction of, or deletion of personal information we hold about you by contacting us using the details below.',
    ],
  },
  {
    heading: '7. Changes To This Policy',
    paragraphs: [
      'We may update this policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision.',
    ],
  },
  {
    heading: '8. Contact Us',
    paragraphs: [`If you have questions about this policy, contact us at ${BUSINESS.email} or ${BUSINESS.phoneDisplay}.`],
  },
];

function Privacy() {
  useDocumentMeta('Privacy Policy', 'How we collect, use, and protect your information.');

  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <LegalContent lastUpdated="12 July 2026" sections={SECTIONS} />
    </>
  );
}

export default Privacy;
