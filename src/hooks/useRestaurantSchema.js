import { useEffect } from 'react';
import { BUSINESS } from '../constants/business';

/**
 * Injects schema.org Restaurant structured data as a <script type="application/ld+json">.
 * Address is only included once BUSINESS.address.line1 is set — publishing an
 * empty/placeholder address in structured data would be worse than omitting it.
 */
export function useRestaurantSchema() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      servesCuisine: ['Kebab', 'Turkish', 'Mexican'],
      priceRange: '$$',
      ...(BUSINESS.address.line1 && {
        address: {
          '@type': 'PostalAddress',
          streetAddress: BUSINESS.address.line1,
          addressLocality: BUSINESS.address.suburb,
          addressRegion: BUSINESS.address.state,
          postalCode: BUSINESS.address.postcode,
          addressCountry: 'AU',
        },
      }),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, []);
}
