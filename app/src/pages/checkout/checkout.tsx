import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { cartSelector, createOrder, getCartAction } from '../../store/cart';
import { UseFormReturn, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { checkoutValidationSchema } from '../../schemas/checkout.schema';
import FormField from '../../components/FormField/FormField';
import { AutocompleteField } from '../../components/AutocompleteField/AutocompleteField';
import { ISendOrder } from '../../models/sendOrder.interface';
import {
  getCitiesAction,
  getCountriesAction,
  sharedSelector,
} from '../../store/shared';
import { useNavigate } from 'react-router-dom';
import { calculateVat } from '../../common/utils';
import ReadOnlyField from '../../components/ReadOnlyField/ReadOnlyField';
import ProductCard from '../../components/ProductCard/ProductCard';
import { requestStatusSuccess } from '../../common/consts';

enum Steps {
  First = 0,
  Second,
}

const CheckoutPage: FC = () => {
  const [step, setStep] = useState<Steps>(0);
  const dispatch = useAppDispatch();
  const { countries, cities } = useAppSelector(sharedSelector);
  const { cart } = useAppSelector(cartSelector);
  const navigate = useNavigate();
  const { currency } = cart;
  console.log(cities, 'cities');

  const form = useForm({
    mode: 'onBlur',
    resolver: yupResolver(checkoutValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      address: {
        country: '',
        city: '',
        street: '',
      },
    } as ISendOrder,
  });

  const country = form.watch('address.country');
  const city = form.watch('address.city');
  const street = form.watch('address.street');
  const name = form.watch('name');
  const email = form.watch('email');

  const vat = calculateVat(cart.totalAmount, country);

  const onCountryChange = () => {
    form.resetField('address.city');
    form.resetField('address.street');
  };

  const onCityChange = () => {
    form.resetField('address.street');
  };

  const onSubmit = async () => {
    const formData = form.getValues();
    const order = { ...formData, cart: { ...cart, vat } };
    const response = await dispatch(createOrder(order));

    if (response.meta.requestStatus === requestStatusSuccess) {
      navigate('/order-success');
    }
  };

  const changeStep = (number: Steps) => {
    setStep(number);
  };

  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCountriesAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCitiesAction(country));
  }, [country, dispatch]);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box display="flex" justifyContent="center">
        <PageTitle>Checkout</PageTitle>
      </Box>
      <Paper>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {step === Steps.First ? (
            <>
              <Box
                display="flex"
                flexDirection="column"
                sx={{ width: '40vw' }}
                p={5}
                gap={2}>
                <FormField control={form.control} name="name" label="Name" />
                <FormField control={form.control} name="email" label="Email" />
                <AutocompleteField
                  options={countries}
                  name="address.country"
                  control={form.control}
                  placeholder="Country"
                  onValueChange={onCountryChange}
                />
                <AutocompleteField
                  options={cities}
                  name="address.city"
                  control={form.control}
                  placeholder="City"
                  disabled={!country}
                  onValueChange={onCityChange}
                />
                <FormField
                  control={form.control}
                  name="address.street"
                  label="Street"
                />
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Button onClick={() => navigate('/')}>Back</Button>
                <Button
                  onClick={() => changeStep(1)}
                  disabled={!form.formState.isValid}>
                  Next
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Box
                display="flex"
                flexDirection="column"
                sx={{ width: '40vw' }}
                p={5}
                gap={2}>
                <Typography alignSelf="center" variant="h4">
                  Order Information
                </Typography>
                <Divider />
                <ReadOnlyField
                  field="All products"
                  value={`${cart.totalAmount} ${currency}`}
                />
                <ReadOnlyField
                  field={`VAT (${country})`}
                  value={`${vat} ${currency}`}
                />
                <Divider />
                <ReadOnlyField
                  field="Total"
                  value={`${cart.totalAmount + vat} ${currency}`}
                />
                <Typography alignSelf="center" variant="h4">
                  Delivery Information
                </Typography>
                <Divider />
                <ReadOnlyField field="Country" value={country} />
                <ReadOnlyField field="City" value={city} />
                <ReadOnlyField field="Street" value={street} />
                <ReadOnlyField field="Name" value={name} />
                <ReadOnlyField field="Email" value={email} />
                <Typography alignSelf="center" variant="h4">
                  Product Information
                </Typography>
                <Box display="flex" flexDirection="column" gap={2}>
                  {cart?.products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Button onClick={() => changeStep(0)}>Back</Button>
                <Button onClick={onSubmit} disabled={!form.formState.isValid}>
                  Complete order
                </Button>
              </Box>
            </>
          )}
        </form>
      </Paper>
    </Box>
  );
};

export default CheckoutPage;
