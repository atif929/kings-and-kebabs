import { FaLeaf, FaFire, FaGem } from 'react-icons/fa';
import Section from '../../../components/ui/Section/Section';
import FeatureGrid from '../../../components/shared/FeatureGrid/FeatureGrid';
import styles from './QualityPromise.module.css';

const PROMISES = [
  {
    icon: FaLeaf,
    title: 'Fresh Ingredients',
    description: 'Produce cut fresh daily, quality cuts of meat, and sauces made in-house — no shortcuts.',
  },
  {
    icon: FaFire,
    title: 'Traditional Cooking',
    description: 'Doner slow-roasted the traditional way, Mexican staples made from scratch, not a microwave.',
  },
  {
    icon: FaGem,
    title: 'Premium Experience',
    description: 'From the first bite to the last napkin, every visit should feel like more than fast food.',
  },
];

function QualityPromise() {
  return (
    <Section tone="elevated">
      <p className="eyebrow">Our Promise</p>
      <h2 className={styles.heading}>Quality, Every Single Time</h2>
      <FeatureGrid items={PROMISES} />
    </Section>
  );
}

export default QualityPromise;
