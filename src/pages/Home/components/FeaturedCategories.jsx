import { Link } from 'react-router-dom';
import {
  GiKebabSpit,
  GiChickenLeg,
  GiTacos,
  GiHotMeal,
  GiHamburger,
  GiCookingPot,
} from 'react-icons/gi';
import { FaPepperHot, FaLeaf, FaBreadSlice } from 'react-icons/fa';
import { MENU_CATEGORIES } from '../../../data/menuData';
import { ROUTES } from '../../../constants/routes';
import Section from '../../../components/ui/Section/Section';
import styles from './FeaturedCategories.module.css';

// One icon per category id — purely decorative, keeps cards scannable at a glance.
const CATEGORY_ICONS = {
  'doner-kebab': GiKebabSpit,
  'chicken-mixed-kebab': GiChickenLeg,
  'snack-packs': FaPepperHot,
  'vegetarian': FaLeaf,
  'mexican': GiTacos,
  'burgers': GiHamburger,
  'baked-potatoes': GiHotMeal,
  'gozleme': FaBreadSlice,
  'pides': GiCookingPot,
};

function FeaturedCategories() {
  return (
    <Section tone="primary">
      <p className="eyebrow">Explore The Menu</p>
      <h2 className={styles.heading}>Nine Categories. One Craving Solved.</h2>

      <div className={styles.grid}>
        {MENU_CATEGORIES.map(({ id, label }) => {
          const Icon = CATEGORY_ICONS[id];
          return (
            <Link key={id} to={`${ROUTES.MENU}?category=${id}`} className={styles.card}>
              {Icon && <Icon className={styles.icon} aria-hidden="true" />}
              <span className={styles.label}>{label}</span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

export default FeaturedCategories;
