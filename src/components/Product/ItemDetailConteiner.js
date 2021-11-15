import React,{useState, useEffect} from "react";
import { ItemDetail }  from "./ItemDetail";
import { useParams } from "react-router";
import db from "../../firebase";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

function ItemDetailConteiner () {

    const { id } = useParams();  
    const [infoProd, setInfoProd] = useState();
    const [prodFireDet, setProdFireDet] = useState([])

      /* estado para el loader */
  const [loader, setLoader] = useState(true);

    const getItemProd = new Promise((resolve) => {
        setTimeout(() => {
           const mockProd = [
              {
                 id: "1",
                 titulo: "Camiseta Eslovenia",
                 descripcion: "Titular",
                 precio: 9000,
                 img: "CAMISETA ESLOVENIA",
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
                 img: "SHORT MIDLAND",
                 categoria: "short",
                 stock:10,
              },
           ];
           resolve(mockProd)
        },2000);
    }
    )

    useEffect(() => {
      setLoader(true);
        getItemProd.then((res) => {
           setInfoProd(res.find((i) => i.id === id));   // haces el find
        }).finally(() => setLoader(false));
     }, [id]);


//////////////////////////////////////////////////////////////////

console.log("El ID es: ", id)

     async function getPrd(db) {
      const productsCol = id
         ? query(collection(db, "productos"), where("id", "==", id))
         : collection(db, "productos");
      const prodSnap = await getDocs(productsCol);
      const prodList = prodSnap.docs.map((doc) => doc.data());
      console.log(prodList)
      setProdFireDet(prodList);
      return prodList;
   }


  useEffect(() => {
      getPrd(db)
      },[id])


    //return <ItemDetail data={infoProd} />;

    return(
    <>
          {loader ? (
        <h1>cargando...</h1>
      ) : (<ItemDetail data={infoProd} />)
      }
</>
)
};

export default ItemDetailConteiner