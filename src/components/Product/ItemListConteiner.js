
import React,{useState, useEffect} from "react";
import Producto from "./Product";


function ItemListConteiner () {

    const [prod, setProd] = useState([])

    const getProd = new Promise ( (resolve) =>{
        setTimeout( () =>{
            const MockProd = [
                {nombre: 1, apellido: "hola" },
                {nombre: 2, apellido: "hola" },
                {nombre: 4, apellido: "hola" }
            ] 
            resolve(MockProd)
        },2000)
    }
    )

    useEffect( () =>{
        getProd.then ((res) =>{
console.log("respuesta de promesa" + res);
setProd(res)
        }
        )
    },[]
    )

return (
<>
<div>
    {
        prod.map( (prod, index) =>
            {
                return (<Producto key ={prod.nombre} apellido = {prod.apellido} />)
            }
        )
    }
</div>
 </>
 );
 
 };

 export default ItemListConteiner