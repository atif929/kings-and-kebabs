import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiShoppingBag } from 'react-icons/fi';
import { NAV_LINKS, ROUTES } from '../../../constants/routes';
import { BUSINESS } from '../../../constants/business';
import { useScrolled } from '../../../hooks/useScrolled';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import { useCart } from '../../../hooks/useCart';
import Logo from '../../ui/Logo/Logo';
import Button from '../../ui/Button/Button';
import styles from './Navbar.module.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrolled(24);
  const location = useLocation();
  const { itemCount, toggleCart } = useCart();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useLockBodyScroll(isMenuOpen);

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Logo size="sm" />

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === ROUTES.HOME}
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.desktopActions}>
          <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className={styles.phoneLink}>
            <FiPhone aria-hidden="true" />
            <span>{BUSINESS.phoneDisplay}</span>
          </a>
          <button type="button" className={styles.cartBtn} onClick={toggleCart} aria-label={`Cart, ${itemCount} items`}>
            <FiShoppingBag />
            {itemCount > 0 && <span className={styles.cartBadge}>{itemCount}</span>}
          </button>
          <Button to={ROUTES.MENU} variant="primary" size="md">
            Order Now
          </Button>
        </div>

        {/* Mobile cart + menu toggle */}
        <div className={styles.mobileActions}>
          <button type="button" className={styles.cartBtn} onClick={toggleCart} aria-label={`Cart, ${itemCount} items`}>
            <FiShoppingBag />
            {itemCount > 0 && <span className={styles.cartBadge}>{itemCount}</span>}
          </button>
          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <nav
        id="mobile-nav"
        className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}
        aria-label="Mobile"
        aria-hidden={!isMenuOpen}
      >
        <ul className={styles.mobileNavList}>
          {NAV_LINKS.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === ROUTES.HOME}
                className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className={styles.mobilePhoneLink} tabIndex={isMenuOpen ? 0 : -1}>
          <FiPhone aria-hidden="true" />
          <span>{BUSINESS.phoneDisplay}</span>
        </a>
        <Button to={ROUTES.MENU} variant="primary" size="lg" className={styles.mobileCta} tabIndex={isMenuOpen ? 0 : -1}>
          Order Now
        </Button>
      </nav>
    </header>
  );
}

export default Navbar;
