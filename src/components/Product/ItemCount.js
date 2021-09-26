import React,{useState} from 'react';

const ItemCount = ({ stock, initial }) => {

    const [stockF,setStock] = useState(0);


    const agregar = () =>{
        if (stockF < Number(stock)){
        setStock(stockF + 1)
        }
    }
    
    const sacar = () =>{
        if (stockF > Number(initial)){
            setStock(stockF - 1)
            }
    }
    return (
        <>
        <div>
            <button onClick={agregar}>Agregar</button>
            <button onClick={sacar}>Quitar</button>
            <br/>
            <h2>{stockF}</h2>
        </div>
         </>
         );
         
         };
        
         export default ItemCount


