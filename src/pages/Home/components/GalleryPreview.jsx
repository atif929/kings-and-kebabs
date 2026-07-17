import { ROUTES } from '../../../constants/routes';
import { GALLERY_ITEMS } from '../../../data/galleryData';
import Section from '../../../components/ui/Section/Section';
import Button from '../../../components/ui/Button/Button';
import styles from './GalleryPreview.module.css';

// First 6 items from the shared gallery data — stays in sync with the full Gallery page automatically.
const previewItems = GALLERY_ITEMS.slice(0, 6);

function GalleryPreview() {
  return (
    <Section tone="primary">
      <p className="eyebrow">A Taste Of The Experience</p>
      <h2 className={styles.heading}>Gallery</h2>

      <div className={styles.grid}>
        {previewItems.map((item) => (
          <div key={item.id} className={styles.tile}>
            <img src={item.src} alt={item.caption} className={styles.photo} loading="lazy" />
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <Button to={ROUTES.GALLERY} variant="secondary" size="md">
          View Full Gallery
        </Button>
      </div>
    </Section>
  );
}

export default GalleryPreview;
