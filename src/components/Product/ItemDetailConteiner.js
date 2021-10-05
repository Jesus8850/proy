import React,{useState, useEffect} from "react";
import  ItemDetail  from "./ItemDetail";

function ItemDetailConteiner () {

    const [infoProd, setInfoProd] = useState();

    const getItemProd = new Promise ( (resolve) =>{
        setTimeout( () =>{
            const mockProd =
                {id: 1, titulo: "Camiseta Eslovenia", descripcion: "Titular", precio: 9000 ,img: <img src="/img/Camis1.jpg" alt="C1" />}
            
            resolve(mockProd)
        },2000);
    }
    )

    useEffect( () =>{
        getItemProd.then ((res) =>{
        setInfoProd(res)
        })
    },[]
    )

    return (

        <div class="detail-conteiner">
<ItemDetail data={infoProd}/>
        </div>
    )
}

export default ItemDetailConteiner