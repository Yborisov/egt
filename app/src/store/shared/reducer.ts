import { createReducer } from '@reduxjs/toolkit';
import { SharedState } from './type';
import { getCountriesAction, getCitiesAction } from './actions';

const initialState: SharedState = {
  countries: [],
  cities: [],
};

export const sharedReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCountriesAction.fulfilled, (state, { payload }) => {
      state.countries = payload;
    })
    .addCase(getCitiesAction.fulfilled, (state, { payload }) => {
      state.cities = payload;
    });
});
