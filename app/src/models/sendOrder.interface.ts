import { IAddress } from './address.interface';
import { ICart } from './cart.interface';

export interface ISendOrder {
  address: IAddress;
  name: string;
  email: string;
  cart: ICart;
}
