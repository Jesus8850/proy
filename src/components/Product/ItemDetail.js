import React,{useState, useEffect} from "react";

import { Item } from './Item';
import ItemCount from './ItemCount';
import Producto from './Product';


export const ItemDetail =( {props} ) => {

    return (

        <ul>
        {props.map((item) => (
          <>
                <Item item={props} />
                <Producto nombre = {props.nombre}/>
                <ItemCount stock = "5" initial = "1" />     
          </>
        ))}
      </ul>

 )
}
