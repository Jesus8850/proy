

import React,{useState} from 'react';
import Producto from "./Product";


function ItemListConteiner () { // aca desestructuras la prop greeting que te viene
const [stock,setStock] = useState(0);

const agregar = () =>{
    setStock(stock + 1)
}

const sacar = () =>{
    setStock(stock - 1)
}


return (
<>
<div>
    <button onClick={agregar}>Agregar</button>
    <button onClick={sacar}>Quitar</button>
    <br/>
    <h2>{stock}</h2>
</div>
 </>
 );
 
 };

 export default ItemListConteiner