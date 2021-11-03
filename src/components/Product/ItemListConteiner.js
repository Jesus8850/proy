import React,{useState, useEffect, useContext} from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import Context from "../../context/CartContext";
import db from "../../firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

function ItemListConteiner () {

    const { idcat } = useParams();   // traes la propiedad catId, que es la que definiste en tu url como :catId
    const [prod, setProd] = useState([])
    const [prodFire, setProdFire] = useState([])

    const ContextData = useContext(Context);

    const getProd = new Promise ( (resolve) =>{
        setTimeout( () =>{
            const mockProd = [
                {id: "1", titulo: "Camiseta Eslovenia", descripcion: "Titular", precio: 9000 ,img: <img src="/img/Camis1.jpg" alt="C1" />,categoria: "camiseta", stock: 10},
                {id: "2", titulo: "Camiseta Eslovaquia", descripcion: "Suplente", precio: 11500 ,img: <img src="/img/Camis2.jpg" alt="C2" />,categoria: "camiseta", stock: 10},
                {id: "3", titulo: "Short Midland", descripcion: "Juego", precio: 1400,img: <img src="/img/Short1.jpg" alt="S1" />, categoria: "short", stock: 10}
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

    //useEffect(() => {
    //    getProd.then((res) => {
    //        idcat ? setProd(res.filter(i => i.categoria === idcat)) : setProd(res);
    //    });
    // }, []);


    //funciona
     useEffect(() => {
        getProd.then((res) => {
           idcat
              ? setProd(res.filter((i) => i.categoria === idcat))
              : setProd(res);
        });
     }, [idcat]);

////////////////////////////////////////////////////////////////////////////////////////

     async function getPrd(db) {
        const productsCol = collection(db, 'productos');
        const prodSnap = await getDocs (productsCol);
        const prodList = prodSnap.docs.map(doc => doc.data());
        setProdFire(prodList);
        return prodList;
    }

    useEffect(() => {
        getPrd(db)
        },[])
  


return <ItemList items={prodFire} />;

 
 };

 export default ItemListConteiner