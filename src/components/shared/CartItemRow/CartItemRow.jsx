import { FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import { formatPrice } from '../../../utils/formatPrice';
import { useCart } from '../../../hooks/useCart';
import styles from './CartItemRow.module.css';

function CartItemRow({ item }) {
  const { increment, decrement, removeItem } = useCart();

  return (
    <li className={styles.row}>
      <img src={item.image} alt={item.name} className={styles.image} />

      <div className={styles.info}>
        <p className={styles.name}>
          {item.name}
          {item.sizeLabel ? ` — ${item.sizeLabel}` : ''}
        </p>
        <p className={styles.unitPrice}>{formatPrice(item.price)} each</p>

        <div className={styles.qtyRow}>
          <button type="button" onClick={() => decrement(item.cartId)} aria-label={`Decrease quantity of ${item.name}`}>
            <FiMinus />
          </button>
          <span className={styles.qty}>{item.quantity}</span>
          <button type="button" onClick={() => increment(item.cartId)} aria-label={`Increase quantity of ${item.name}`}>
            <FiPlus />
          </button>
        </div>
      </div>

      <div className={styles.right}>
        <span className={styles.subtotal}>{formatPrice(item.price * item.quantity)}</span>
        <button
          type="button"
          className={styles.removeBtn}
          onClick={() => removeItem(item.cartId)}
          aria-label={`Remove ${item.name} from cart`}
        >
          <FiTrash2 />
        </button>
      </div>
    </li>
  );
}

export default CartItemRow;
