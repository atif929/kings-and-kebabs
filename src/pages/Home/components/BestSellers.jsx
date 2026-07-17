import { MENU_ITEMS } from '../../../data/menuData';
import { ROUTES } from '../../../constants/routes';
import { getItemDisplayPrice } from '../../../utils/formatPrice';
import Section from '../../../components/ui/Section/Section';
import Button from '../../../components/ui/Button/Button';
import styles from './BestSellers.module.css';

// Curated by id — pulls live price/description from the single source of
// truth in menuData.js, so a future price change updates here automatically.
const BEST_SELLER_IDS = ['doner-the-lot', 'snack-original-hsp', 'mex-tacos', 'veg-falafel-kebab'];

const bestSellers = BEST_SELLER_IDS.map((id) => MENU_ITEMS.find((item) => item.id === id)).filter(Boolean);

function BestSellers() {
  return (
    <Section tone="elevated">
      <p className="eyebrow">Customer Favorites</p>
      <h2 className={styles.heading}>Best Sellers</h2>

      <div className={styles.grid}>
        {bestSellers.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.cardTop}>
              <h3 className={styles.name}>{item.name}</h3>
              <span className={styles.price}>{getItemDisplayPrice(item)}</span>
            </div>
            {item.description && <p className={styles.description}>{item.description}</p>}
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <Button to={ROUTES.MENU} variant="secondary" size="md">
          View Full Menu
        </Button>
      </div>
    </Section>
  );
}

export default BestSellers;
