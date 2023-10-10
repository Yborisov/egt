import { createReducer } from '@reduxjs/toolkit';
import { OrderState } from './type';
import { createOrder } from './actions';

export const initialOrder = {
  products: [],
  name: '',
  email: '',
  address: {
    country: '',
    city: '',
    street: '',
  },
  totalAmount: 0,
  vat: 0,
};

const initialState: OrderState = {
  order: initialOrder,
};

export const orderReducer = createReducer(initialState, (builder) => {
  builder.addCase(createOrder.fulfilled, (state, { payload }) => {
    state.order = payload;
  });
});
