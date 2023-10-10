import { ICity } from '../../models/city.interface';
import { ICountry } from '../../models/country.interface';

export type SharedState = {
  countries: ICountry[];
  cities: ICity[];
};
