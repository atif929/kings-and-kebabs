/** Formats a numeric price as AUD currency string, e.g. 14.9 -> "$14.90". */
export function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

/** Returns a display-ready price string for a menu item, handling flat vs size-tiered pricing. */
export function getItemDisplayPrice(item) {
  if (item.price != null) return formatPrice(item.price);
  if (item.sizePrices?.length) return `From ${formatPrice(item.sizePrices[0].price)}`;
  return '';
}
