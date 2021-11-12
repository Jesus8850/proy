import React,{ useContext} from "react";
import CartContext from "../context/CartContext";
import { collection,addDoc } from "firebase/firestore";
import db from "../firebase";

export default function Contacto() {

    const {cartItems} = useContext(CartContext)


const addOrder = (e) => {

    e.preventDefault()

var vnombre = document.getElementById("nombre").value
var vmail = document.getElementById("email").value
var vnomtar = document.getElementById("nomtarjeta").value
var vnumtar = document.getElementById("numtarjeta").value
var vtel = document.getElementById("telefono").value
var vmailconf = document.getElementById("emailconf").value


if (vmail == vmailconf) {

    const generarOrden ={
        buyer:{
            mail: vmail,
            emailconf: vmailconf,
            nombre: vnombre,
            nomtar: vnomtar,
            numtar: vnumtar,
            tel: vtel
        },
        productos: cartItems
    }

    const agregaOrden = async(generarOrden) =>{
        const orderFirebase = collection(db,'orders')
        const order = await addDoc(orderFirebase,generarOrden)
    }

    agregaOrden(generarOrden)

}else{
    alert("LOS MAILS NO COINCIDEN")
}

}

    
    return(
 
<form id="pago" onSubmit={addOrder}>
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
<input type="email" id="email" name="email" placeholder="Escribe tu e mail" required autofocus>
</input>
</li>
<li>
<label for="confirmar email: ">Confirmar Email</label>
<input type="email" id="emailconf" name="emailconf" placeholder="Confirma tu e mail" required autofocus>
</input>
</li>
<li>
<label for="telefono: ">Teléfono</label>
<input type="text" id="telefono" name="telefono" placeholder="Ingresa tu telefono" required autofocus>
</input>
</li>
</ol>
</fieldset>
<fieldset>
<legend>Datos de tarjeta de crédito o débito</legend>
<ol>
<li>
<label for="nomtarjeta">Nombre Tarjeta</label>
<input type="text" id="nomtarjeta" name="nomtarjeta" placeholder="nombre tarjeta" required autofocus>
</input>
</li>
<li>
<label for="numtarjeta">Numero Tarjeta</label>
<input type="text" id="numtarjeta" name="numtarjeta" placeholder="numero tarjeta" required autofocus>
</input>
</li>
</ol>
</fieldset>
-------------------------------------------------
<fieldset>
<input type="submit" value="CONFIRMAR ORDEN"></input>
</fieldset>
</form>

    )
}