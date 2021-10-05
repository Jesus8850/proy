import React,{useState, useEffect} from "react";


function ItemDetail (props) {

    return (

        <div className = "item-detail">
            Entra al detalle de Item
            {console.log("detalle ", props.data)}
            <div>
            <p>Precio: {props.precio}</p>
            </div>
            
        </div>

    )
}

export default ItemDetail