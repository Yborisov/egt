import axios from 'axios';
import { ICart } from '../models/cart.interface';
import { apiRoutes } from '../common/apiRoutes';
import { ICountry } from '../models/country.interface';
import { IResponse } from '../models/response.interface';
import { ICity } from '../models/city.interface';
import { ISendOrder } from '../models/sendOrder.interface';
import { IOrder } from '../models/order.interface';

export const getCart = async (): Promise<ICart> => {
  const response = await axios.get<ICart>(apiRoutes.getCart());

  return response.data;
};

export const getCountries = async (): Promise<ICountry[]> => {
  const response = await axios.get<IResponse<ICountry[]>>(
    apiRoutes.getCountries(),
  );

  return response.data.data;
};

export const getCities = async (country: string): Promise<ICity[]> => {
  const response = await axios.get<IResponse<ICity[]>>(
    apiRoutes.getCities(country),
  );

  return response.data.data;
};

export const createOrder = async (order: ISendOrder): Promise<IOrder> => {
  const response = await axios.post<IResponse<IOrder>>(
    apiRoutes.createOrder(),
    order,
  );
  console.log(response, 'orderrr');

  return response.data.data;
};
