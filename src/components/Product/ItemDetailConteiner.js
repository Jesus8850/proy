import React,{useState, useEffect} from "react";
import { ItemDetail }  from "./ItemDetail";
import { useParams } from "react-router";

function ItemDetailConteiner () {

    const { id } = useParams();  
    const [infoProd, setInfoProd] = useState();

    const getItemProd = new Promise((resolve) => {
        setTimeout(() => {
           const mockProd = [
              {
                 id: "1",
                 titulo: "Camiseta Eslovenia",
                 descripcion: "Titular",
                 precio: 9000,
                 img: <img src="/img/Camis1.jpg" alt="C2" />,
                 categoria: "camiseta",
                 stock:10,
              },
              {
                 id: "2",
                 titulo: "Camiseta Eslovaquia",
                 descripcion: "Suplente",
                 precio: 11500,
                 img: <img src="/img/Camis2.jpg" alt="C2" />,
                 categoria: "camiseta",
                 stock:10,
              },
              {
                 id: "3",
                 titulo: "Short Midland",
                 descripcion: "Juego",
                 precio: 1400,
                 img: <img src="/img/Short1.jpg" alt="C2" />,
                 categoria: "short",
                 stock:10,
              },
           ];
           resolve(mockProd)
        },2000);
    }
    )

    useEffect(() => {
        getItemProd.then((res) => {
           setInfoProd(res.find((i) => i.id === id));   // haces el find
        });
     }, [id]);
  

    return (<ItemDetail data={infoProd} />);
    
};

export default ItemDetailConteiner