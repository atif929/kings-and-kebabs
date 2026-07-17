/**
 * Thin, explicit wrapper over the `.container` utility class defined in
 * global.css (max-width + responsive side padding). Exists as a component
 * so pages compose `<Container>` rather than remembering the class name,
 * and so the max-width behavior has one place to change later.
 */
function Container({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`container ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}

export default Container;
