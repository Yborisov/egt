import { createSelector } from '@reduxjs/toolkit';
import { CartState } from './type';

export const selectCart = (state: { cart: CartState }) => state.cart;

export const cartSelector = createSelector(selectCart, (state) => state);
