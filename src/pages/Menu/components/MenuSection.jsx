import Container from '../../../components/ui/Container/Container';
import MenuItemCard from './MenuItemCard';
import styles from './MenuSection.module.css';

function MenuSection({ category, items, notes }) {
  return (
    <section id={category.id} className={styles.section}>
      <Container>
        <h2 className={styles.heading}>{category.label}</h2>

        {notes?.length > 0 && (
          <ul className={styles.notes}>
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        )}

        <div className={styles.grid}>
          {items.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default MenuSection;
