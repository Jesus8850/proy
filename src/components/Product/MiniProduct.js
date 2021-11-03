import './miniprod.css';

import React,{useState, useContext} from 'react';
import CartContext from "../../context/CartContext";
import CartWidget from '../NavBar/CartWidget';
import { Item } from './Item';

const MiniProduct = ({item, count}) => {
  const {titulo, precio, id} = item
  const {addItem, removeItem} = useContext(CartContext)

  return (
    <><br />
    <div className ="mini">
        <br />
        <CartWidget></CartWidget>
          <p>{titulo} | {count}u. x ${precio}</p>
          <button onClick={() => removeItem(item)}>Quitar</button>
          <br />
      </div><br />
      </>
  )
}

export default MiniProduct