/**
 * No backend exists yet. This simulates a successful order submission
 * (network delay + resolved promise) so checkout has a real, honest
 * success/failure path without faking a mailto or pretending to charge a
 * card. Swap the body for a real API/Stripe call later — callers already
 * treat this as async and don't need to change.
 */
export function submitOrder(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ orderId: `KKM-${Date.now().toString().slice(-6)}`, ...order });
    }, 900);
  });
}
