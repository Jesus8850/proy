import React,{useState, useEffect, useContext} from "react";
import CartContext from "../context/CartContext";
import { getFirestore, collection, getDocs,addDoc } from "firebase/firestore";
import db from "../firebase";

export default function Contacto() {

    const {cartItems} = useContext(CartContext)


const AddOrder = () => {


var vnombre = document.getElementById("nombre").value


console.log("nombre ", vnombre)


    const generarOrden ={
        buyer:{
            mail: "vmail",
            nombre: vnombre,
            nomtar: "vnomtar",
            numtar: "3333-3333333",
            tel: "vtel"
        },
        productos: cartItems
    }

    const agregaOrden = async(generarOrden) =>{
        const orderFirebase = collection(db,'orders')
        const order = await addDoc(orderFirebase,generarOrden)
    }

    agregaOrden(generarOrden)

}


    
    return(
 
<form id="pago">
<fieldset>
<legend>Datos del comprador</legend>
<ol>
<li>
<label for="Nombre: ">Nombre</label>
<input type="text" id="nombre" name="nombre" type="text" placeholder="Escribe tu nombre completo" required autofocus>
</input>
</li>
<li>
<label for="email: ">Email</label>
<input type="text" id="email" name="email" type="text">
</input>
</li>
<li>
<label for="telefono: ">Teléfono</label>
<input type="text" id="telefono" name="telefono" type="text">
</input>
</li>
</ol>
</fieldset>
<fieldset>
<legend>Datos de tarjeta de crédito o débito</legend>
<ol>
<li>
<label for="nomtarjeta">Nombre Tarjeta</label>
<input type="text" id="nomtarjeta" name="nomtarjeta" type="text">
</input>
</li>
</ol>
</fieldset>
-------------------------------------------------
<fieldset>
<button onClick={AddOrder}>Confirmar pedido</button>
</fieldset>
</form>

    )
}