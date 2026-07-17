// Single source of truth for all route paths.
// Components/nav should import from here — never hardcode path strings.
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  MENU: '/menu',
  GALLERY: '/gallery',
  CONTACT: '/contact',
  CHECKOUT: '/checkout',
  PRIVACY: '/privacy-policy',
  TERMS: '/terms-and-conditions',
  NOT_FOUND: '*',
};

export const NAV_LINKS = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'Menu', path: ROUTES.MENU },
  { label: 'About', path: ROUTES.ABOUT },
  { label: 'Gallery', path: ROUTES.GALLERY },
  { label: 'Contact', path: ROUTES.CONTACT },
];
