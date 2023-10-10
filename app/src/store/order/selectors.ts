import { createSelector } from '@reduxjs/toolkit';
import { OrderState } from './type';

export const selectCart = (state: { order: OrderState }) => state.order;

export const orderSelector = createSelector(selectCart, (state) => state);
