import { useNavigate } from 'react-router-dom';
import { FiX, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../../../hooks/useCart';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import { formatPrice } from '../../../utils/formatPrice';
import { ROUTES } from '../../../constants/routes';
import Button from '../../ui/Button/Button';
import CartItemRow from '../CartItemRow/CartItemRow';
import styles from './CartSidebar.module.css';

function CartSidebar() {
  const { items, isOpen, closeCart, subtotal, total, deliveryFee } = useCart();
  const navigate = useNavigate();
  useLockBodyScroll(isOpen);

  function handleCheckout() {
    closeCart();
    navigate(ROUTES.CHECKOUT);
  }

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={closeCart} aria-hidden="true" />}

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`} aria-label="Your Order" aria-hidden={!isOpen}>
        <div className={styles.header}>
          <h2 className={styles.title}>Your Order</h2>
          <button type="button" className={styles.closeBtn} onClick={closeCart} aria-label="Close cart">
            <FiX />
          </button>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <FiShoppingBag className={styles.emptyIcon} aria-hidden="true" />
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            <ul className={styles.list}>
              {items.map((item) => (
                <CartItemRow key={item.cartId} item={item} />
              ))}
            </ul>

            <div className={styles.summary}>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Delivery Fee</span>
                <span>{formatPrice(deliveryFee)}</span>
              </div>
              <div className={styles.totalRow}>
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <Button variant="primary" size="lg" className={styles.checkoutBtn} onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default CartSidebar;
