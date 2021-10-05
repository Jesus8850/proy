import React from 'react';
import { Item } from './Item';
import ItemCount from './ItemCount';


export const ItemList = ({ items }) => {
return (
    <ul>
      {items.map((item) => (
        <>
              <Item item={item} />
              <ItemCount stock = "5" initial = "1" />
        </>
      ))}
    </ul>
  );
};