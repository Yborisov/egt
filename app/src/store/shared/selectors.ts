import { createSelector } from '@reduxjs/toolkit';
import { SharedState } from './type';

export const selectShared = (state: { shared: SharedState }) => state.shared;

export const sharedSelector = createSelector(selectShared, (state) => state);
