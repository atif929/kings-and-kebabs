import { FaLeaf, FaPepperHot } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { formatPrice } from '../../../utils/formatPrice';
import { getMenuItemImage } from '../../../utils/getMenuItemImage';
import { useCart } from '../../../hooks/useCart';
import styles from './MenuItemCard.module.css';

// Only two dietary tags exist in the current data — extend here as the menu grows.
const TAG_META = {
  vegetarian: { icon: FaLeaf, label: 'Vegetarian' },
  spicy: { icon: FaPepperHot, label: 'Spicy' },
};

function MenuItemCard({ item }) {
  const { name, description, price, sizePrices, comboPrice, tags, note } = item;
  const { addItem } = useCart();
  const image = getMenuItemImage(item);

  // Flat-price items add directly. Size-tiered items (snack packs, nachos,
  // burrito bowl) have no size-picker UI yet, so each size chip itself adds
  // that specific size — same interaction, no extra dialog needed.
  function handleAdd(size) {
    const cartId = size ? `${item.id}-${size.label}` : item.id;
    addItem({
      cartId,
      id: item.id,
      name: item.name,
      image,
      price: size ? size.price : item.price,
      sizeLabel: size?.label,
    });
  }

  return (
    <article className={styles.card}>
      <img src={image} alt={name} className={styles.image} loading="lazy" />

      <div className={styles.body}>
        <div className={styles.top}>
          <h3 className={styles.name}>{name}</h3>
          {tags?.length > 0 && (
            <div className={styles.tags}>
              {tags.map((tag) => {
                const meta = TAG_META[tag];
                if (!meta) return null;
                const Icon = meta.icon;
                return <Icon key={tag} className={styles.tagIcon} aria-label={meta.label} title={meta.label} />;
              })}
            </div>
          )}
        </div>

        {description && <p className={styles.description}>{description}</p>}
        {note && <p className={styles.note}>{note}</p>}

        <div className={styles.bottom}>
          {price != null && !sizePrices && (
            <>
              <span className={styles.price}>{formatPrice(price)}</span>
              <button type="button" className={styles.orderBtn} onClick={() => handleAdd()} aria-label={`Order ${name}`}>
                <FiPlus /> Order Now
              </button>
            </>
          )}

          {sizePrices && (
            <div className={styles.sizeRow}>
              {sizePrices.map((size) => (
                <button
                  key={size.label}
                  type="button"
                  className={styles.sizeChip}
                  onClick={() => handleAdd(size)}
                  aria-label={`Order ${name}, ${size.label} size`}
                >
                  {size.label} <strong>{formatPrice(size.price)}</strong>
                </button>
              ))}
            </div>
          )}

          {comboPrice != null && (
            <span className={styles.combo}>
              Combo <strong className={styles.comboPrice}>{formatPrice(comboPrice)}</strong>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default MenuItemCard;
