import { Box, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

export interface IReadOnlyField {
  field: ReactNode;
  value: ReactNode;
}

const ReadOnlyField: FC<IReadOnlyField> = ({ field, value }) => (
  <Box display="flex" justifyContent="space-between">
    <Typography variant="h5" color="text.secondary">
      {field}
    </Typography>
    <Typography variant="h5" color="text.secondary" fontWeight="bold">
      {value}
    </Typography>
  </Box>
);

export default ReadOnlyField;
