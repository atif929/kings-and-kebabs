import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderSummary.module.css';

function OrderSummary({ items, subtotal, deliveryFee, total }) {
  return (
    <div className={styles.summary}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.cartId} className={styles.row}>
            <img src={item.image} alt={item.name} className={styles.image} />
            <div className={styles.info}>
              <p className={styles.name}>
                {item.name}
                {item.sizeLabel ? ` — ${item.sizeLabel}` : ''}
              </p>
              <p className={styles.qty}>Qty {item.quantity}</p>
            </div>
            <span className={styles.lineTotal}>{formatPrice(item.price * item.quantity)}</span>
          </li>
        ))}
      </ul>

      <div className={styles.totals}>
        <div className={styles.totalRow}>
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className={styles.totalRow}>
          <span>Delivery Fee</span>
          <span>{formatPrice(deliveryFee)}</span>
        </div>
        <div className={styles.grandTotal}>
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
