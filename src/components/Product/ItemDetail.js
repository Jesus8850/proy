
import React,{useState, useContext} from 'react';
import CartContext from "../../context/CartContext";
import Counter from "./Counter";
import CartWidget from "../NavBar/CartWidget";

export const ItemDetail = ({ data }) => {
    const [stockF,setStock] = useState(3);
    const [itemF,setItemF] = useState(0);

    //const {precio, stock} = data
    const {addItem, removeItem} = useContext(CartContext)

    const handleOnAdd = count => addItem(data, count)

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
         <>
            {data?.img}
            <p>$ {data?.precio}</p>
            
            <div>
        <Counter stock={data?.stock} onAdd={handleOnAdd} />
        <CartWidget data={data}></CartWidget>
      </div>
         </>
      </ul>
   );
   
};

console.log()