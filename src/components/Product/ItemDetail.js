import React from 'react';
import { Item } from './Item';


export const ItemDetail = ({ items }) => {
return (
    <ul>
      {items.map((item) => (
        <>
              <Item item={item} />
        </>
      ))}
    </ul>
  );
};