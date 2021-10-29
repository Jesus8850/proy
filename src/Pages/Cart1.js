import React, {useState} from "react";
import { useParams } from "react-router";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartWidget from "../components/NavBar/CartWidget";


const Cart1 = () => {

    const[showCart, setShowCart] = useState(false)

    const handlecart = () => {
        !showCart ? setShowCart(true) : setShowCart(false)
    }

    return (  
    <div>
    <button onClick={handlecart}>
    <FontAwesomeIcon icon={faShoppingCart}/>  
    <CartWidget show={showCart} close ={handlecart} />
    </button>
    </div> 
    )
}

export default Cart1