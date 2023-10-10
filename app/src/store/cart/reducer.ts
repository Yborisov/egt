import { createReducer } from '@reduxjs/toolkit';
import { CartState } from './type';
import { getCartAction } from './actions';

export const initialCart = {
  products: [],
  totalAmount: 0,
  totalCount: 0,
  currency: '',
};

const initialState: CartState = {
  cart: initialCart,
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(getCartAction.fulfilled, (state, { payload }) => {
    state.cart = payload;
  });
});
