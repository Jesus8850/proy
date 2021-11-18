import './miniprod.css';

import React,{useContext} from 'react';
import CartContext from "../../context/CartContext";

const MiniProduct = ({item, count}) => {
  const {titulo, precio, id} = item
  const {removeItem,removeOneItem} = useContext(CartContext)

  return (
    <><br />
    <div className ="mini">
        <br />
          <p>{titulo} | {count}u. x ${precio}</p>
          <button onClick={() => removeItem(item)}>Quitar Producto</button>
          <button onClick={() => removeOneItem(item)}>Quitar 1</button>  
      </div><br />
      </>
  )
}

export default MiniProduct