import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MENU_CATEGORIES, MENU_NOTES, getItemsByCategory } from '../../data/menuData';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import PageHeader from '../../components/shared/PageHeader/PageHeader';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';

function Menu() {
  useDocumentMeta('Full Menu', 'Doner kebab, snack packs, burritos, tacos, gozleme and more — full menu with official prices.');
  const [searchParams] = useSearchParams();
  const hasHandledInitialQuery = useRef(false);

  // Supports deep-links from the homepage's Featured Categories cards
  // (e.g. /menu?category=doner-kebab) by scrolling to that section on load.
  useEffect(() => {
    if (hasHandledInitialQuery.current) return;
    hasHandledInitialQuery.current = true;

    const targetId = searchParams.get('category');
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }, [searchParams]);

  return (
    <>
      <PageHeader
        eyebrow="Our Menu"
        title="Full Menu"
        description="Every category, official prices, made fresh daily. Dine in, takeaway, or delivery."
      />

      <CategoryNav categories={MENU_CATEGORIES} />

      {MENU_CATEGORIES.map((category) => (
        <MenuSection
          key={category.id}
          category={category}
          items={getItemsByCategory(category.id)}
          notes={MENU_NOTES[category.id]}
        />
      ))}
    </>
  );
}

export default Menu;
