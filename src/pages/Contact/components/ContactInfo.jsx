import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { BUSINESS, getFormattedAddress } from '../../../constants/business';
import styles from './ContactInfo.module.css';

const hasAddress = Boolean(BUSINESS.address.line1);

function ContactInfo() {
  return (
    <div className={styles.info}>
      <div className={styles.block}>
        <FiPhone className={styles.icon} aria-hidden="true" />
        <div>
          <p className={styles.label}>Phone</p>
          <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className={styles.value}>
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>

      <div className={styles.block}>
        <FiMail className={styles.icon} aria-hidden="true" />
        <div>
          <p className={styles.label}>Email</p>
          <a href={`mailto:${BUSINESS.email}`} className={styles.value}>
            {BUSINESS.email}
          </a>
        </div>
      </div>

      {hasAddress ? (
        <div className={styles.block}>
          <FiMapPin className={styles.icon} aria-hidden="true" />
          <div>
            <p className={styles.label}>Address</p>
            <p className={styles.value}>{getFormattedAddress()}</p>
          </div>
        </div>
      ) : (
        <div className={styles.block}>
          <FiMapPin className={styles.icon} aria-hidden="true" />
          <div>
            <p className={styles.label}>Address</p>
            <p className={styles.valueMuted}>Coming soon — call us for directions in the meantime.</p>
          </div>
        </div>
      )}

      <div className={styles.block}>
        <FiClock className={styles.icon} aria-hidden="true" />
        <div>
          <p className={styles.label}>Hours</p>
          <ul className={styles.hoursList}>
            {BUSINESS.hours.map(({ day, time }) => (
              <li key={day}>
                <span>{day}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
