import React,{useState, useEffect} from "react";
import Producto from "./Product";
import { ItemDetail } from "./ItemDetail";

function ItemDetailConteiner () {

    const [prod, setProd] = useState([])

    const getProd = new Promise ( (resolve) =>{
        setTimeout( () =>{
            const mockProd = [
                {id: 1, titulo: "Camiseta Eslovenia", descripcion: "Titular", precio: 9000 ,img: <img src="/img/Camis1.jpg" alt="C1" />}
           ] 
            resolve(mockProd)
        },2000)
    }
    )

    useEffect( () =>{
        getProd.then ((res) =>{
        setProd(res)
        })
    },[]
    )


return <ItemDetail items={prod} />;

 
 };

 export default ItemDetailConteiner