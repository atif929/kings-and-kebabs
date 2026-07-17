import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * Single reusable Button/CTA. Renders as:
 *  - react-router <Link>  when `to` is passed (internal navigation)
 *  - <a>                  when `href` is passed (external links, tel:, mailto:)
 *  - <button>             otherwise (form/JS actions)
 *
 * variant: 'primary' (solid gold) | 'secondary' (gold outline) | 'ghost' (text-only, cream)
 * size: 'md' | 'lg'
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  ...rest
}) {
  const classes = [styles.btn, styles[variant], styles[size], className].filter(Boolean).join(' ');

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className={styles.icon} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={styles.icon} aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={rest.type || 'button'} className={classes} {...rest}>
      {content}
    </button>
  );
}

export default Button;
