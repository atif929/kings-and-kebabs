import styles from './PaymentMethodSelector.module.css';

const OPTIONS = [
  { value: 'online', label: 'Online Payment', hint: 'Card payment — coming soon' },
  { value: 'cod', label: 'Cash On Delivery', hint: 'Pay when your order arrives' },
];

function PaymentMethodSelector({ value, onChange }) {
  return (
    <div className={styles.group} role="radiogroup" aria-label="Payment method">
      {OPTIONS.map((option) => (
        <label key={option.value} className={`${styles.option} ${value === option.value ? styles.selected : ''}`}>
          <input
            type="radio"
            name="paymentMethod"
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className={styles.radio}
          />
          <span>
            <span className={styles.label}>{option.label}</span>
            <span className={styles.hint}>{option.hint}</span>
          </span>
        </label>
      ))}
    </div>
  );
}

export default PaymentMethodSelector;
