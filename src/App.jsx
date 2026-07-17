import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import PageLayout from './components/layout/PageLayout/PageLayout';
import PageLoader from './components/shared/PageLoader/PageLoader';

// Route-level code splitting: each page ships as its own chunk and only
// downloads when visited, keeping the initial bundle small. PageLayout
// (Navbar/Footer) stays eagerly loaded since it's needed immediately.
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Menu = lazy(() => import('./pages/Menu/Menu'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout'));
const Privacy = lazy(() => import('./pages/Privacy/Privacy'));
const Terms = lazy(() => import('./pages/Terms/Terms'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

// App.jsx stays a pure route table. PageLayout supplies Navbar + Footer
// via <Outlet/> so every route gets them without repeating markup.
function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.MENU} element={<Menu />} />
          <Route path={ROUTES.GALLERY} element={<Gallery />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
          <Route path={ROUTES.PRIVACY} element={<Privacy />} />
          <Route path={ROUTES.TERMS} element={<Terms />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
