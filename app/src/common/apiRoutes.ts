export const apiRoutes = {
  getCart: () => 'api/cart',
  getCountries: () => 'api/countries',
  getCities: (country: string) => `api/cities?country=${country}`,
  createOrder: () => `api/orders`,
};
