import './NavBar.css';

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import Cart1 from '../../Pages/Cart1';

const NavBar =() => {
  return (

    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
      <Link to="/"><Button>Home</Button></Link>
      </Typography>
      <Button>Inicio</Button>
      <Link to="/Contacto"><Button>Contacto</Button></Link>
      <Link to="/PageProd"><Button>Productos</Button></Link>
      <Link to="/categoria/camiseta"><Button>Camisetas</Button></Link>
      <Link to="/categoria/short"><Button>Short</Button></Link>

      <div className ="cart-button">
      <Button><Cart1/>
      </Button>
        </div>
        </Toolbar>
  </AppBar>

  );
}

export default NavBar;