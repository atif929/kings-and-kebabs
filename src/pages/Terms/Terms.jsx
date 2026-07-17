import PageHeader from '../../components/shared/PageHeader/PageHeader';
import LegalContent from '../../components/shared/LegalContent/LegalContent';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { BUSINESS } from '../../constants/business';

const SECTIONS = [
  {
    heading: '1. Acceptance Of Terms',
    paragraphs: [
      `By accessing and using this website, you accept and agree to be bound by these Terms & Conditions. If you do not agree, please do not use this website.`,
    ],
  },
  {
    heading: '2. Use Of This Website',
    paragraphs: [
      'This website is provided to give information about our menu, location, and business hours, and to allow you to contact us. You agree not to misuse this website, including attempting unauthorised access or disrupting its normal operation.',
    ],
  },
  {
    heading: '3. Menu & Pricing Accuracy',
    paragraphs: [
      'We make reasonable efforts to keep menu items and prices on this website accurate and up to date. However, prices, availability, and menu items are subject to change without notice, and in-store pricing at the time of purchase prevails over any pricing shown on this website.',
    ],
  },
  {
    heading: '4. Intellectual Property',
    paragraphs: [
      `All content on this website, including text, graphics, and the ${BUSINESS.name} name and branding, is the property of ${BUSINESS.name} unless otherwise stated, and may not be reproduced without permission.`,
    ],
  },
  {
    heading: '5. Third-Party Links',
    paragraphs: [
      'This website may link to third-party services (such as Google Maps). We are not responsible for the content or practices of any third-party sites.',
    ],
  },
  {
    heading: '6. Limitation Of Liability',
    paragraphs: [
      `To the extent permitted by law, ${BUSINESS.name} is not liable for any indirect, incidental, or consequential loss arising from your use of this website. Nothing in these terms limits any consumer guarantee that cannot lawfully be excluded under the Australian Consumer Law.`,
    ],
  },
  {
    heading: '7. Changes To These Terms',
    paragraphs: [
      'We may update these Terms & Conditions from time to time. Continued use of this website after changes are posted constitutes acceptance of the revised terms.',
    ],
  },
  {
    heading: '8. Governing Law',
    paragraphs: ['These terms are governed by the laws of Australia.'],
  },
  {
    heading: '9. Contact Us',
    paragraphs: [`Questions about these terms can be sent to ${BUSINESS.email} or ${BUSINESS.phoneDisplay}.`],
  },
];

function Terms() {
  useDocumentMeta('Terms & Conditions', 'The terms that govern use of this website.');

  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" />
      <LegalContent lastUpdated="12 July 2026" sections={SECTIONS} />
    </>
  );
}

export default Terms;
