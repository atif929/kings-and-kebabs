import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook } from 'react-icons/fi';
import { NAV_LINKS, ROUTES } from '../../../constants/routes';
import { BUSINESS, getFormattedAddress } from '../../../constants/business';
import Logo from '../../ui/Logo/Logo';
import Container from '../../ui/Container/Container';
import styles from './Footer.module.css';

const hasAddress = Boolean(BUSINESS.address.line1);
const hasSocial = Boolean(BUSINESS.social.instagram || BUSINESS.social.facebook);

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Logo size="md" />
            <p className={styles.tagline}>Where bold kebab flavors meet Mexican zest.</p>
            {hasSocial && (
              <div className={styles.social}>
                {BUSINESS.social.instagram && (
                  <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FiInstagram />
                  </a>
                )}
                {BUSINESS.social.facebook && (
                  <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FiFacebook />
                  </a>
                )}
              </div>
            )}
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              {NAV_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact</h3>
            <ul className={styles.linkList}>
              <li>
                <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className={styles.iconLink}>
                  <FiPhone aria-hidden="true" />
                  <span>{BUSINESS.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className={styles.iconLink}>
                  <FiMail aria-hidden="true" />
                  <span>{BUSINESS.email}</span>
                </a>
              </li>
              {hasAddress && (
                <li>
                  <span className={styles.iconLink}>
                    <FiMapPin aria-hidden="true" />
                    <span>{getFormattedAddress()}</span>
                  </span>
                </li>
              )}
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Hours</h3>
            <ul className={styles.hoursList}>
              {BUSINESS.hours.map(({ day, time }) => (
                <li key={day}>
                  <span className={styles.day}>{day}</span>
                  <span className={styles.time}>{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>
            &copy; {year} {BUSINESS.name}. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link to={ROUTES.PRIVACY}>Privacy Policy</Link>
            <Link to={ROUTES.TERMS}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
