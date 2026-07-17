import { ROUTES } from '../../constants/routes';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import CtaBanner from '../../components/shared/CtaBanner/CtaBanner';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import FeaturedCategories from './components/FeaturedCategories';
import BestSellers from './components/BestSellers';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import GalleryPreview from './components/GalleryPreview';
import LocationPreview from './components/LocationPreview';

function Home() {
  useDocumentMeta(
    undefined,
    'Bold kebab flavors meet Mexican zest. Dine in, takeaway and delivery — view our full menu and order today.',
  );

  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedCategories />
      <BestSellers />
      <WhyChooseUs />
      <Testimonials />
      <GalleryPreview />
      <LocationPreview />
      <CtaBanner
        heading="Hungry Yet?"
        subheading="Order online for pickup, or dine in and taste it fresh off the spit."
        buttonLabel="View Menu & Order"
        buttonTo={ROUTES.MENU}
      />
    </>
  );
}

export default Home;
