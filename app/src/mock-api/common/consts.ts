import { ICountry } from '../../models/country.interface';
import { bgCities, roCities } from '../data/cities';
import { countries } from '../data/countries';
export const countryToCityMap = {
  [(countries.find((c) => c.name === 'Bulgaria') as ICountry).name]: bgCities,
  [(countries.find((c) => c.name === 'Romania') as ICountry).name]: roCities,
};
