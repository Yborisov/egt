import { IProduct } from './product.interface';

export interface ICart {
  products: IProduct[];
  totalAmount: number;
  totalCount: number;
  currency: string;
  vat?: number;
}
