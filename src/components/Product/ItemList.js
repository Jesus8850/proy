import { Item } from './Item';
import ItemCount from './ItemCount';
import Producto from './Product';
import React,{useState} from 'react';
import Counter from "./Counter";
import CartWidget from "../NavBar/CartWidget";

export const ItemList = ({ items }) => {
  const [stockF,setStock] = useState(0);
    const [itemF,setItemF] = useState(0);

    const onAdd = () =>{
        if(itemF < stockF){
        setItemF(itemF + 1)
        }
    }

    const onLess = () =>{
        if(itemF > 0){
        setItemF(itemF - 1)
        }
    }
return (
    <ul>
      {items.map((item) => (
        <>
              <Item item={item} />
              <Producto nombre = {item.nombre}/>
              
        </>
      ))}
    </ul>
  );
};

//<ItemCount onAdd ={onAdd} onLess ={onLess} initial={itemF} /> 