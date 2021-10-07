
import React,{useState, useEffect} from "react";
import Producto from "./Product";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListConteiner () {

    const { idcat } = useParams();   // traes la propiedad catId, que es la que definiste en tu url como :catId

    const [prod, setProd] = useState([])

    const getProd = new Promise ( (resolve) =>{
        setTimeout( () =>{
            const mockProd = [
                {id: 1, titulo: "Camiseta Eslovenia", descripcion: "Titular", precio: 9000 ,img: <img src="/img/Camis1.jpg" alt="C1" />,categoria: "camiseta"},
                {id: 2, titulo: "Camiseta Eslovaquia", descripcion: "Suplente", precio: 11500 ,img: <img src="/img/Camis2.jpg" alt="C2" />,categoria: "camiseta"},
                {id: 3, titulo: "Short Midland", descripcion: "Juego", precio: 1400,img: <img src="/img/Short1.jpg" alt="S1" />, categoria: "short"}
            ] 
            resolve(mockProd)
        },2000)
    }
    )

    //useEffect( () =>{
    //    getProd.then ((res) =>{
     //   setProd(res)
     //   })
    //},[]
    //)

    useEffect(() => {
        getProd.then((res) => {
            idcat ? setProd(res.filter(i => i.categoria === idcat)) : setProd(res);
        });
     }, []);


return <ItemList items={prod} />;

 
 };

 export default ItemListConteiner