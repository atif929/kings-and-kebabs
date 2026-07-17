import { FaLeaf, FaFire, FaClock, FaHandHoldingHeart } from 'react-icons/fa';
import Section from '../../../components/ui/Section/Section';
import FeatureGrid from '../../../components/shared/FeatureGrid/FeatureGrid';
import styles from './WhyChooseUs.module.css';

const FEATURES = [
  {
    icon: FaLeaf,
    title: 'Fresh Ingredients',
    description: 'Vegetables cut daily, sauces made in-house, nothing frozen and forgotten.',
  },
  {
    icon: FaFire,
    title: 'Traditional Cooking',
    description: 'Slow-roasted doner and time-honored recipes, done the right way.',
  },
  {
    icon: FaClock,
    title: 'Fast, Reliable Service',
    description: 'Dine in, takeaway, or delivery — your food, ready when you need it.',
  },
  {
    icon: FaHandHoldingHeart,
    title: 'Generous Portions',
    description: 'Every plate is built to satisfy, not to leave you wanting more.',
  },
];

function WhyChooseUs() {
  return (
    <Section tone="primary">
      <p className="eyebrow">Why Choose Us</p>
      <h2 className={styles.heading}>The Kings Kebab Standard</h2>
      <FeatureGrid items={FEATURES} />
    </Section>
  );
}

export default WhyChooseUs;
