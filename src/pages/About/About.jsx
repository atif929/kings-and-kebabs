import { ROUTES } from '../../constants/routes';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import PageHeader from '../../components/shared/PageHeader/PageHeader';
import CtaBanner from '../../components/shared/CtaBanner/CtaBanner';
import OurStory from './components/OurStory';
import QualityPromise from './components/QualityPromise';

function About() {
  useDocumentMeta('About Us', 'Two cuisines, one kitchen — learn about our approach to fresh ingredients and traditional cooking.');

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Kings Kebab & Mexican"
        description="Bold flavors, honest ingredients, and a menu built on doing two cuisines right."
      />
      <OurStory />
      <QualityPromise />
      <CtaBanner
        heading="Come Taste The Difference"
        subheading="Dine in, order takeaway, or get it delivered — fresh, every time."
        buttonLabel="View Menu & Order"
        buttonTo={ROUTES.MENU}
      />
    </>
  );
}

export default About;
