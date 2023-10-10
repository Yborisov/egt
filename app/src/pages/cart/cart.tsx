import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { cartSelector, getCartAction } from '../../store/cart';

import ProductCard from '../../components/ProductCard/ProductCard';
import PageTitle from '../../components/PageTitle/PageTitle';

import { styles } from './cart.styles';

const CartPage: FC = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector(cartSelector);
  const { currency } = cart;

  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box display="flex" justifyContent="center" mb={2}>
        <PageTitle>Your Cart</PageTitle>
      </Box>
      <Grid container spacing={2}>
        <Grid item container xs={12} sm={4}>
          <Paper elevation={0}>
            <Box display="flex" flexDirection="column" gap={2}>
              {cart?.products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper elevation={3}>
            <Box display="flex" flexDirection="column" gap={2} p={2}>
              <Typography alignSelf="center" variant="h3">
                Order Information
              </Typography>
              <Divider />
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" color="text.secondary">
                  All products
                </Typography>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  fontWeight="bold">
                  {`${cart.totalAmount} ${currency}`}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" color="text.secondary">
                  VAT
                </Typography>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  fontWeight="bold">
                  Calculated on the next step
                </Typography>
              </Box>
              <Divider />
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" color="text.secondary">
                  Total
                </Typography>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  fontWeight="bold">
                  Calculated on the next step
                </Typography>
              </Box>
              <Box alignSelf="center" mt={2}>
                <Link to="/checkout">
                  <Button size="medium" sx={styles.button} variant="contained">
                    Continue
                  </Button>
                </Link>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
