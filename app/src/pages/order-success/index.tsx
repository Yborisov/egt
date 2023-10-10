import { Box, Button, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import { orderSelector } from '../../store/order';
import { useNavigate } from 'react-router-dom';
import ReadOnlyField from '../../components/ReadOnlyField/ReadOnlyField';

const OrderSuccessPage: FC = () => {
  const { order } = useAppSelector(orderSelector);
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4">Success</Typography>
      <Paper>
        <Box
          sx={{ width: '40vw' }}
          display="flex"
          flexDirection="column"
          p={5}
          gap={2}>
          <ReadOnlyField field="Product cost" value={order.totalAmount} />
          <ReadOnlyField field="VAT" value={order.vat} />
          <ReadOnlyField
            field="Total cost"
            value={order.vat + order.totalAmount}
          />
          <Button variant="contained" onClick={onClick}>
            Go to home
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default OrderSuccessPage;
