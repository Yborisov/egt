import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

import { styles } from './Header.styles';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { cartlessRoutes } from '../../common/consts';

export interface IHeader {
  isDarkTheme: boolean;
  onChange: () => void;
}

const Header: FC<IHeader> = ({ isDarkTheme, onChange }) => {
  const [showShoppingCart, setShowShoppingCart] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (cartlessRoutes.includes(location.pathname)) {
      setShowShoppingCart(false);
      return;
    }
    setShowShoppingCart(true);
  }, [location.pathname]);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ ...styles.grow, ...styles.link }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              disableRipple
              sx={{ mr: 2 }}>
              <HomeIcon />
            </IconButton>
          </Link>
          {showShoppingCart && (
            <Link to="/cart" style={styles.link}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                disableRipple
                sx={{ mr: 2 }}>
                <ShoppingCartIcon />
              </IconButton>
            </Link>
          )}
          <FormGroup>
            <FormControlLabel
              control={<Switch />}
              checked={isDarkTheme}
              onChange={onChange}
              label={isDarkTheme ? 'Dark Mode' : 'Light Mode'}
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
