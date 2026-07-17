// Central business info — used in Navbar, Footer, Contact page, and SEO structured data.
export const BUSINESS = {
  name: 'Kings Kebab & Mexican',
  phone: '+61 401 271 331',
  phoneDisplay: '0401 271 331',
  email: 'info@kingskebabmexican.com.au', // placeholder — confirm real inbox before launch
  address: {
    line1: 'Shop 216/211 Lake Entrance Rd',
    suburb: 'Shellharbour City Centre',
    state: 'NSW',
    postcode: '2529',
    country: 'Australia',
  },
  hours: [
    { day: 'Monday – Thursday', time: '11:00 AM – 9:30 PM' },
    { day: 'Friday – Saturday', time: '11:00 AM – 10:00 PM' },
    { day: 'Sunday', time: '12:00 PM – 9:00 PM' },
  ], // placeholder hours — please confirm actual trading hours
  social: {
    instagram: '',
    facebook: '',
  },
};

/** Single-line formatted address, e.g. "Shop 216/211 Lake Entrance Rd, Shellharbour City Centre NSW 2529". */
export function getFormattedAddress() {
  const { line1, suburb, state, postcode } = BUSINESS.address;
  return `${line1}, ${suburb} ${state} ${postcode}`;
}
