import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart';
import { sharedReducer } from './shared';
import { orderReducer } from './order';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    shared: sharedReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
