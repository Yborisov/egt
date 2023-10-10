import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCountries, getCities } from '../../api';

export const getCountriesAction = createAsyncThunk(
  'coutrines/get',
  async () => await getCountries(),
);

export const getCitiesAction = createAsyncThunk(
  'cities/get',
  async (country: string) => await getCities(country),
);
