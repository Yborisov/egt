import * as yup from 'yup';
export const checkoutValidationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.object({
    country: yup.string().required(),
    city: yup.string().required(),
    street: yup.string().required(),
  }),
});
