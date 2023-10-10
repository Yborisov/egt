import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { styles } from './Layout.styles';
import { Box, CssBaseline, PaletteMode } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define theme settings
const light = {
  palette: {
    mode: 'light' as PaletteMode,
  },
};

const dark = {
  palette: {
    mode: 'dark' as PaletteMode,
  },
};

const Layout: FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Header isDarkTheme={isDarkTheme} onChange={changeTheme} />
      <Box sx={styles.wrapper}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
