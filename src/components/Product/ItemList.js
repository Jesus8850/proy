import React from 'react';
import { Item } from './Item';
import ItemCount from './ItemCount';
import Producto from './Product';


export const ItemList = ({ items }) => {
return (
    <ul>
      {items.map((item) => (
        <>
              <Item item={item} />
              <Producto nombre = {item.nombre}/>
              <ItemCount stock = "5" initial = "1" />     
        </>
      ))}
    </ul>
  );
};