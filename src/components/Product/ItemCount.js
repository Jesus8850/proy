import React,{useState} from 'react';

const ItemCount = ({ onAdd, onLess, initial }) => {

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


