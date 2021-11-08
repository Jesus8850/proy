import React,{useState, useEffect, useContext} from "react";
import CartContext from "../context/CartContext";
import { getFirestore, collection, getDocs,addDoc } from "firebase/firestore";
import db from "../firebase";

export default function Contacto() {

    const {cartItems,handleTotalPrice,handleTotal,total,price} = useContext(CartContext)

    const generarOrden ={
        buyer:{
            mail: "fsdfs",
            nombre: "dfssfd",
            nomtar: "fsdfsdsdf",
            numtar: "fdsfsdf",
            tel: "sfsdfds"
        },
        productos: cartItems
    }

    const agregaOrden = async(generarOrden) =>{
        const orderFirebase = collection(db,'orders')
        const order = await addDoc(orderFirebase,generarOrden)
    }

    const AddOrder = () => {
        agregaOrden(generarOrden)
    }

    console.log("entra a ver en cartit", generarOrden)
    
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
<input type="text" id="email" name="email" type="email" placeholder="ejemplo@gmail.ar" required>
</input>
</li>
<li>
<label for="telefono: ">Teléfono</label>
<input type="text" id="telefono" name="telefono" type="tel" placeholder="Ej. +5411xxxxxxxxx" required>
</input>
</li>
</ol>
</fieldset>
<fieldset>
<legend>Datos de tarjeta de crédito o débito</legend>
<ol>
<li>
<label for="numtarjeta">Número</label>
<input type="text" id="numtarjeta" name="numtarjeta" type="number" placeholder="Ej. 5555-4444-3333-2222" required>
</input>
</li>
<li>
<label for="nomtarjeta">Nombre Tarjeta</label>
<input type="text" id="nomtarjeta" name="nomtarjeta" type="text" placeholder="Nombre que figura en la tarjeta" required>
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