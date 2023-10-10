import { IProduct } from '../../models/product.interface';

export const products: IProduct[] = [
  {
    id: '7b0dbb8b-55a7-45be-b82d-4153b1313bcf',
    name: 'Adidas High Tops',
    price: 45.99,
    currency: 'USD',
    quantity: 4,
    image: '/assets/img1.png',
  },
  {
    id: '8774f1b2-abbc-455a-bce6-5d463c155793',
    name: 'Adidas Tennis Shoes',
    price: 79.99,
    currency: 'USD',
    quantity: 2,
    image: '/assets/img2.png',
  },
  {
    id: '5e99a645-fef7-4cc5-9ef4-54358c31df98',
    name: 'Adidas Running Shoes',
    price: 64.49,
    currency: 'USD',
    quantity: 1,
    image: '/assets/img3.png',
  },
];
