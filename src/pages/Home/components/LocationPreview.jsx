import { FiMapPin, FiClock, FiPhone } from 'react-icons/fi';
import { BUSINESS, getFormattedAddress } from '../../../constants/business';
import { ROUTES } from '../../../constants/routes';
import Section from '../../../components/ui/Section/Section';
import Button from '../../../components/ui/Button/Button';
import styles from './LocationPreview.module.css';

const hasAddress = Boolean(BUSINESS.address.line1);

function LocationPreview() {
  return (
    <Section id="location" tone="elevated">
      <div className={styles.layout}>
        <div>
          <p className="eyebrow">Visit Us</p>
          <h2 className={styles.heading}>Find Us In-Store</h2>

          <ul className={styles.details}>
            {hasAddress && (
              <li>
                <FiMapPin aria-hidden="true" />
                <span>{getFormattedAddress()}</span>
              </li>
            )}
            <li>
              <FiClock aria-hidden="true" />
              <span>{BUSINESS.hours[0].day}: {BUSINESS.hours[0].time}</span>
            </li>
            <li>
              <FiPhone aria-hidden="true" />
              <span>{BUSINESS.phoneDisplay}</span>
            </li>
          </ul>

          <Button to={ROUTES.CONTACT} variant="primary" size="md">
            Get Directions
          </Button>
        </div>

        {/* Embedded map lands in Phase 7 (Contact page) once the confirmed
            address is available — placeholder keeps the layout balanced. */}
        <div className={styles.mapPlaceholder} aria-hidden="true">
          <FiMapPin className={styles.mapIcon} />
        </div>
      </div>
    </Section>
  );
}

export default LocationPreview;
