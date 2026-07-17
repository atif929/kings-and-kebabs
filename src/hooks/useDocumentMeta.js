import { useEffect } from 'react';
import { BUSINESS } from '../constants/business';

/**
 * Sets document.title and the meta description tag for the current page.
 * Deliberately dependency-free (no react-helmet) — the site only needs
 * title + description per route, so a tiny hook keeps the bundle lean.
 */
export function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${BUSINESS.name}` : BUSINESS.name;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }
  }, [title, description]);
}
