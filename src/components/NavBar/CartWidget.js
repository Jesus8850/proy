import './CartWidget.css';

import React, { useContext } from "react";
import { CartProvider } from '../../context/CartContext';
import CartContext from "../../context/CartContext";
import MiniProduct from '../Product/MiniProduct';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const CartWidget = ({show, close, data}) => {

    console.log("valor es ", data?.precio)

    const {cartItems,handleTotalPrice,handleTotal,total,price} = useContext(CartContext)

    console.log("valor desde cart context ", cartItems.item)

    if (show == true) {
        console.log("entra al main1 es ", show)
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
    console.log("entra al main2 es ", show)
    return (  
        
        <div className = "main2">
        <button onClick={close}>X</button>
        <h1>COSAS 1</h1>
        </div>
        )

}
}

export default CartWidget