import Container from '../Container/Container';
import { useInView } from '../../../hooks/useInView';
import styles from './Section.module.css';

/**
 * Consistent vertical spacing + optional background tone for every
 * homepage/page section, so pages don't hand-roll padding.
 * tone: 'primary' (default bg) | 'elevated' (slightly lighter surface)
 * animate: fades/slides the section in once it scrolls into view
 * (respects prefers-reduced-motion — see Section.module.css). Set false
 * for sections that should render immediately (e.g. above the fold).
 */
function Section({
  id,
  tone = 'primary',
  animate = true,
  className = '',
  containerClassName = '',
  children,
  ...rest
}) {
  const [ref, isInView] = useInView();
  const revealClass = animate ? `${styles.reveal} ${isInView ? styles.revealVisible : ''}` : '';

  return (
    <section
      id={id}
      ref={animate ? ref : undefined}
      className={`${styles.section} ${styles[tone]} ${revealClass} ${className}`.trim()}
      {...rest}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export default Section;
