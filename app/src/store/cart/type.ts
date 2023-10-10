import { IProduct } from '../../models/product.interface';

export type CartState = {
  cart: {
    products: IProduct[];
    totalAmount: number;
    totalCount: number;
    currency: string;
  };
};
