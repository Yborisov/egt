import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api';
import { ISendOrder } from '../../models/sendOrder.interface';

export const getCartAction = createAsyncThunk('cart/get', async () => {
  const cart = await api.getCart();

  return cart;
});

export const createOrder = createAsyncThunk(
  'order/post',
  async (order: ISendOrder) => {
    const response = await api.createOrder(order);

    return response;
  },
);
