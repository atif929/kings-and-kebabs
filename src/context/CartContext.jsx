import { useReducer } from 'react';
import { CartContext } from './cartContextObject';

export const DELIVERY_FEE = 5;

const initialState = { items: [], isOpen: false };

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.cartId === action.payload.cartId);
      const items = existing
        ? state.items.map((i) => (i.cartId === action.payload.cartId ? { ...i, quantity: i.quantity + 1 } : i))
        : [...state.items, { ...action.payload, quantity: 1 }];
      return { ...state, items, isOpen: true };
    }
    case 'INCREMENT':
      return {
        ...state,
        items: state.items.map((i) => (i.cartId === action.payload ? { ...i, quantity: i.quantity + 1 } : i)),
      };
    case 'DECREMENT':
      return {
        ...state,
        items: state.items
          .map((i) => (i.cartId === action.payload ? { ...i, quantity: i.quantity - 1 } : i))
          .filter((i) => i.quantity > 0),
      };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.cartId !== action.payload) };
    case 'CLEAR':
      return { ...state, items: [] };
    case 'OPEN':
      return { ...state, isOpen: true };
    case 'CLOSE':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const total = state.items.length > 0 ? subtotal + DELIVERY_FEE : 0;

  const value = {
    items: state.items,
    isOpen: state.isOpen,
    itemCount,
    subtotal,
    total,
    deliveryFee: DELIVERY_FEE,
    addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
    increment: (cartId) => dispatch({ type: 'INCREMENT', payload: cartId }),
    decrement: (cartId) => dispatch({ type: 'DECREMENT', payload: cartId }),
    removeItem: (cartId) => dispatch({ type: 'REMOVE_ITEM', payload: cartId }),
    clearCart: () => dispatch({ type: 'CLEAR' }),
    openCart: () => dispatch({ type: 'OPEN' }),
    closeCart: () => dispatch({ type: 'CLOSE' }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
