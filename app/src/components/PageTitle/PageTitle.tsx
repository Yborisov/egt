import { Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

export interface IPageTitle {
  children: ReactNode;
}

const PageTitle: FC<IPageTitle> = ({ children }) => (
  <Typography variant="h2">{children}</Typography>
);

export default PageTitle;
