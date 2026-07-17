/** Menu item image path convention: /images/menu/{category}/{id}.webp */
export function getMenuItemImage(item) {
  return `/images/menu/${item.category}/${item.id}.webp`;
}
