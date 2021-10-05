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

const NavBar =() => {
  return (

    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        News
      </Typography>
      <Button>Inicio</Button>
      <Link to="/"><Button>Home</Button></Link>
      <Link to="/Contacto"><Button>Contacto</Button></Link>
      <Link to="/PageProd"><Button>Productos</Button></Link>
      <div className ="cart">
        <Button><CartWidget/>
        </Button>
        </div>
        
    </Toolbar>
  </AppBar>

  );
}

export default NavBar;