
import ItemCount from "./ItemCount";
import React,{useState} from 'react';

export const ItemDetail = ({ data }) => {
    const [stockF,setStock] = useState(3);
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
         <>
            {data?.img}
            <p>$ {data?.precio}</p>
            <ItemCount onAdd ={onAdd} onLess ={onLess} initial={itemF} />
         </>
      </ul>
   );
};