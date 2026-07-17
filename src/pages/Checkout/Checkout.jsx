import { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { useCart } from '../../hooks/useCart';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { submitOrder } from '../../services/orderService';
import { ROUTES } from '../../constants/routes';
import PageHeader from '../../components/shared/PageHeader/PageHeader';
import Section from '../../components/ui/Section/Section';
import Button from '../../components/ui/Button/Button';
import OrderSummary from './components/OrderSummary';
import PaymentMethodSelector from './components/PaymentMethodSelector';
import styles from './Checkout.module.css';

function Checkout() {
  useDocumentMeta('Checkout', 'Review your order and complete checkout.');
  const { items, subtotal, deliveryFee, total, clearCart } = useCart();
  const [step, setStep] = useState('review'); // review -> payment -> success
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [order, setOrder] = useState(null);

  if (items.length === 0 && step !== 'success') {
    return (
      <Section tone="primary">
        <div className={styles.empty}>
          <p>Your cart is empty.</p>
          <Button to={ROUTES.MENU} variant="primary" size="md">
            View Menu
          </Button>
        </div>
      </Section>
    );
  }

  async function handleConfirm() {
    setIsSubmitting(true);
    const result = await submitOrder({ items, subtotal, deliveryFee, total, paymentMethod });
    setOrder(result);
    clearCart();
    setIsSubmitting(false);
    setStep('success');
  }

  if (step === 'success') {
    return (
      <Section tone="primary">
        <div className={styles.success}>
          <FiCheckCircle className={styles.successIcon} aria-hidden="true" />
          <h1 className={styles.successHeading}>Order Confirmed</h1>
          <p className={styles.successText}>
            Thanks for your order! Your order number is <strong>{order?.orderId}</strong>.
          </p>
          <Button to={ROUTES.MENU} variant="primary" size="md">
            Back to Menu
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      <PageHeader eyebrow="Checkout" title={step === 'review' ? 'Review Your Order' : 'Payment Method'} />
      <Section tone="primary">
        <div className={styles.layout}>
          {step === 'review' && (
            <>
              <OrderSummary items={items} subtotal={subtotal} deliveryFee={deliveryFee} total={total} />
              <Button variant="primary" size="lg" className={styles.actionBtn} onClick={() => setStep('payment')}>
                Continue to Payment
              </Button>
            </>
          )}

          {step === 'payment' && (
            <>
              <PaymentMethodSelector value={paymentMethod} onChange={setPaymentMethod} />
              <div className={styles.paymentActions}>
                <Button variant="secondary" size="lg" onClick={() => setStep('review')} disabled={isSubmitting}>
                  Back
                </Button>
                <Button variant="primary" size="lg" onClick={handleConfirm} disabled={isSubmitting}>
                  {isSubmitting ? 'Placing Order…' : 'Confirm Order'}
                </Button>
              </div>
            </>
          )}
        </div>
      </Section>
    </>
  );
}

export default Checkout;
