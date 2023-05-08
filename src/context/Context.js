import { createContext, useReducer, useMemo } from 'react';

export const CartContext = createContext();

const initialState = {
  cart: [],
  total: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      if (state.cart.length > 0) {
        if (state.cart.find((item) => item.id === action.payload.id)) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            total: state.total + action.payload.price,
          };
        }
      }
      const payloadCopy = JSON.parse(JSON.stringify(action.payload));
      payloadCopy.quantity = action.quantity;
      
      
      return {
        ...state,
        cart: [...state.cart, payloadCopy],
        total: state.total + payloadCopy.price * action.quantity,
      }}
    case 'REMOVE_FROM_CART':
      if (state.cart.find((item) => item.id === action.payload.id).quantity > 1) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          total: state.total - action.payload.price,
        };
      }
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price,
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
        total: 0,
      };
    default:
      return state;
  }

};

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ cartState, cartDispatch }), [cartState, cartDispatch]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
