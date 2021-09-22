import './NavBar.css';

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget';

const NavBar =() => {
  return (

    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        News
      </Typography>
      <Button color="inherit">Login</Button>
      <div className ="cart">
        <Button><CartWidget/>
        </Button>
        </div>
        
    </Toolbar>
  </AppBar>

  );
}

export default NavBar;