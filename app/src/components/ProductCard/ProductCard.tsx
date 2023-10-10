import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

import { IProduct } from '../../models/product.interface';

export interface IProductCard {
  product: IProduct;
}

const ProductCard: FC<IProductCard> = ({ product }) => {
  return (
    <Card sx={{ margin: '0 auto', padding: '0.5rem' }}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={3}>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            sx={{ padding: '1rem 1 rem 0 1rem', objectFit: 'contain' }}
          />
        </Grid>
        <Grid item xs={9}>
          <CardContent>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center">
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`Single price: ${product.price} ${product.currency}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`Quantity: ${product.quantity}`}
              </Typography>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductCard;
