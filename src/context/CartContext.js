import React, {useState, createContext} from "react";

const CartContext = createContext();

const DataProvider = ({infoC}) => {

    const[info, setInfo] = useState([])

    const data = (
        info
    )

    return (
        <CartContext.Provider value = {data}>
            {infoC}
        </CartContext.Provider>
    )
}

export {DataProvider}

export default CartContext;