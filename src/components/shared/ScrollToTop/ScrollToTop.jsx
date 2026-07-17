import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router v6 does not restore scroll position on navigation by default.
 * Mounted once at the top of the router tree (see main.jsx), this watches
 * the current pathname and jumps to the top of the page whenever it changes
 * — covering every navigation source (Navbar, Footer, buttons, Links) with
 * a single piece of logic, rather than duplicating a scroll effect per page.
 *
 * `behavior: 'instant'` is used deliberately: the site's global
 * `scroll-behavior: smooth` (global.css) is meant for in-page anchor
 * scrolling (e.g. the Menu category nav), not for page-to-page transitions,
 * where an animated scroll would look like a visual glitch.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
