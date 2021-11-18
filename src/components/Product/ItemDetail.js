
import React,{useContext} from 'react';
import CartContext from "../../context/CartContext";
import Counter from "./Counter";
import CartWidget from "../NavBar/CartWidget";

export const ItemDetail = ({ data }) => {
 
    const {addItem} = useContext(CartContext)

    const handleOnAdd = count => addItem(data, count)

   return (
      <ul>
         <>
            <img src={`/img/${data?.img}`} alt="C1" />
            <p>{data?.titulo}</p>
            <p>Modelo {data?.descripcion}</p>
            <p>PRECIO: $ {data?.precio}</p> 
            <div>
        <Counter stock={data?.stock} onAdd={handleOnAdd} />
        <CartWidget data={data}></CartWidget>
      </div>
         </>
      </ul>
   );
   
};

console.log()