import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartWidget from "../components/NavBar/CartWidget";


const Cart1 = () => {

    const[showCart, setShowCart] = useState(false)

    const handlecart = () => {
        !showCart ? setShowCart(true) : setShowCart(false)
    }

    return (  
    <div>
    <button onClick={handlecart}>
    <FontAwesomeIcon icon={faShoppingCart}/> </button> 
    <CartWidget show={showCart} close ={handlecart} />
    </div> 
    )
}

export default Cart1