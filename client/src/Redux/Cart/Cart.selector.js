import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
  [selectCart],
  cart => cart.cartItems
);
export const selectCartItemCount = createSelector(
  [selectCartItem],
  cartItems => cartItems.reduce((acc, val) => acc + val.quantity, 0)
);
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
export const countTotalPrice = createSelector(
    [selectCartItem],
        cartItems => cartItems.reduce((acc, val) => acc + (val.quantity * val.price), 0)
    );