import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api';
import { ISendOrder } from '../../models/sendOrder.interface';

export const createOrder = createAsyncThunk(
  'order/post',
  async (order: ISendOrder) => {
    const response = await api.createOrder(order);

    return response;
  },
);
