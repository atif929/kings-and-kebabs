import { FiMapPin, FiExternalLink } from 'react-icons/fi';
import { BUSINESS, getFormattedAddress } from '../../../constants/business';
import Button from '../../../components/ui/Button/Button';
import styles from './ContactMap.module.css';

const hasAddress = Boolean(BUSINESS.address.line1);

// Directions link works today via a name search; once a real address is set
// this automatically switches to an exact-address query — no code change needed.
const directionsQuery = hasAddress ? getFormattedAddress() : BUSINESS.name;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(directionsQuery)}`;

function ContactMap() {
  return (
    <div className={styles.wrapper}>
      {hasAddress ? (
        <iframe
          title="Kings Kebab & Mexican location"
          className={styles.map}
          src={`https://www.google.com/maps?q=${encodeURIComponent(directionsQuery)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className={styles.placeholder}>
          <FiMapPin className={styles.icon} />
          <p>Map will appear here once our address is confirmed.</p>
        </div>
      )}

      <Button href={directionsUrl} variant="secondary" size="md" icon={FiExternalLink} className={styles.directionsBtn}>
        Get Directions
      </Button>
    </div>
  );
}

export default ContactMap;
