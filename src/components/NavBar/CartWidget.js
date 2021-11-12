import './CartWidget.css';

import React, { useContext } from "react";
import { CartProvider } from '../../context/CartContext';
import CartContext from "../../context/CartContext";
import MiniProduct from '../Product/MiniProduct';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const CartWidget = ({show, close, data}) => {

    const {cartItems} = useContext(CartContext)

    if (show == true) {

    return (  
        <><div className="main">
            <br />
            <button onClick={close}>X</button>
            <br />
            <div>
                {cartItems.map(element => <MiniProduct {...element} />)}
            </div>
            <br />
        </div>
        <div className="totales">
            <Link to="/contacto"><Button>TERMINAR COMPRA</Button></Link>
        </div></>

    )
}else{
    return (  
        
        <div className = "main2">
        <button onClick={close}>X</button>
        <h1>COSAS 1</h1>
        </div>
        )

}
}

export default CartWidget