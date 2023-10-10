import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styles } from './404.styles';

const NotFoundPage: FC = () => (
  <Box sx={styles.wrapper}>
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Typography variant="h1">404</Typography>
          <Typography variant="h6">
            The page you’re looking for doesn’t exist.
          </Typography>
          <Link to="/">
            <Button variant="contained">Back Home</Button>
          </Link>
        </Grid>
        <Grid xs={6}>
          <Box
            component="img"
            src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
            alt=""
            width={500}
            height={250}
          />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default NotFoundPage;
