import { createServer } from 'miragejs';
import { products } from './data/products';
import { countries } from './data/countries';
import { countryToCityMap } from './common/consts';
import { ISendOrder } from '../models/sendOrder.interface';

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    routes() {
      this.namespace = 'api';

      this.get('/cart', () => {
        return {
          products,
          totalAmount: products.reduce(
            (acc, product) => (acc += product.price * product.quantity),
            0,
          ),
          totalCount: products.reduce(
            (acc, product) => (acc += product.quantity),
            0,
          ),
          currency: 'USD',
        };
      });

      this.get('/countries', () => ({
        data: countries,
      }));

      this.get('/cities', (_, request) => {
        const { country } = request.queryParams;

        return {
          data: countryToCityMap[country],
        };
      });

      this.post('/orders', (_, request) => {
        const body = JSON.parse(request.requestBody) as ISendOrder;

        return {
          data: {
            name: body.name,
            email: body.email,
            address: body.address,
            products: body.cart.products,
            totalAmount: body.cart.totalAmount,
            vat: body.cart.vat,
          },
        };
      });
    },
  });

  return server;
}
