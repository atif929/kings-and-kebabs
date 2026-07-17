import { FiClock, FiHome, FiShoppingBag, FiTruck, FiPhone } from 'react-icons/fi';
import { BUSINESS } from '../../../constants/business';
import Container from '../../../components/ui/Container/Container';
import styles from './TrustStrip.module.css';

const todayHours = BUSINESS.hours[0]; // simple default; can be made date-aware later

const ITEMS = [
  { icon: FiClock, label: 'Open Today', value: todayHours.time },
  { icon: FiHome, label: 'Dine In', value: 'Available' },
  { icon: FiShoppingBag, label: 'Takeaway', value: 'Available' },
  { icon: FiTruck, label: 'Delivery', value: 'Available' },
  { icon: FiPhone, label: 'Call Us', value: BUSINESS.phoneDisplay },
];

function TrustStrip() {
  return (
    <section id="trust-strip" className={styles.strip}>
      <Container>
        <ul className={styles.list}>
          {ITEMS.map(({ icon: Icon, label, value }) => (
            <li key={label} className={styles.item}>
              <Icon className={styles.icon} aria-hidden="true" />
              <div>
                <p className={styles.label}>{label}</p>
                <p className={styles.value}>{value}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default TrustStrip;
