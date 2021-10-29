import './CartWidget.css';

import React, { useContext } from "react";
import { CartProvider } from '../../context/CartContext';
import CartContext from "../../context/CartContext";
import MiniProduct from '../Product/MiniProduct';

const CartWidget = ({show, close, data}) => {

    console.log("valor es ", data?.precio)

    const {cartItems} = useContext(CartContext)

    console.log("valor desde cart context ", cartItems.item)

    if (show == true) {
        console.log("entra al main1 es ", show)
    return (  
    <CartProvider>  
    <div className = "main">
    <button onClick={close}>X</button>
    <br/>
    {cartItems.map(element => <MiniProduct {...element} />)}
    <br/>
    </div>
    </CartProvider>
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