import styles from './FormField.module.css';

/**
 * type: 'text' | 'email' | 'tel' | 'textarea'
 * Renders a labeled input (or textarea) with an accessible error message
 * wired via aria-describedby/aria-invalid.
 */
function FormField({ label, name, type = 'text', value, onChange, error, required = false, placeholder, rows = 5 }) {
  const fieldId = `field-${name}`;
  const errorId = `${fieldId}-error`;

  const sharedProps = {
    id: fieldId,
    name,
    value,
    onChange,
    placeholder,
    required,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
    className: `${styles.input} ${error ? styles.inputError : ''}`,
  };

  return (
    <div className={styles.field}>
      <label htmlFor={fieldId} className={styles.label}>
        {label}
        {required && <span className={styles.required}> *</span>}
      </label>

      {type === 'textarea' ? <textarea rows={rows} {...sharedProps} /> : <input type={type} {...sharedProps} />}

      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormField;
