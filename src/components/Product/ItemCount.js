import React,{useState} from 'react';

const ItemCount = ({ onAdd, onLess, initial }) => {

    //const [stockF,setStock] = useState(0);


    //const agregar = () =>{
    //    if (stockF < Number(stock)){
    //    setStock(stockF + 1)
    //    }
    //}
    
    //const sacar = () =>{
    //    if (stockF > Number(initial)){
    //        setStock(stockF - 1)
    //        }
    //}
    return (
        <>
        <div>
            <button onClick={onAdd}>Agregar</button>
            <br/>
            <button onClick={onLess}>Quitar</button>
            <br/>
            <h2>{initial}</h2>
        </div>
         </>
         );
         
         };
        
         export default ItemCount


