import './miniprod.css';

import React,{useState, useContext} from 'react';
import CartContext from "../../context/CartContext";
import CartWidget from '../NavBar/CartWidget';
import { Item } from './Item';

const MiniProduct = ({item, count}) => {
  const {titulo, precio, id} = item
  const {addItem, removeItem,removeOneItem} = useContext(CartContext)

  return (
    <><br />
    <div className ="mini">
        <br />
          <p>{titulo} | {count}u. x ${precio}</p>
          <button onClick={() => removeItem(item)}>Quitar Producto</button>
          <button onClick={() => removeOneItem(item)}>Quitar 1</button>  
          <br />
      </div><br />
      </>
  )
}

export default MiniProduct