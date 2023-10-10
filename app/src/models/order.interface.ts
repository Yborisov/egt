import { IAddress } from './address.interface';
import { IProduct } from './product.interface';

export interface IOrder {
  name: string;
  email: string;
  products: IProduct[];
  address: IAddress;
  totalAmount: number;
  vat: number;
}
