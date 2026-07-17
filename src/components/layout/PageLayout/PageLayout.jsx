import { Outlet } from 'react-router-dom';
import { useRestaurantSchema } from '../../../hooks/useRestaurantSchema';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import CartSidebar from '../../shared/CartSidebar/CartSidebar';
import styles from './PageLayout.module.css';

function PageLayout() {
  useRestaurantSchema();

  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <CartSidebar />
    </>
  );
}

export default PageLayout;
