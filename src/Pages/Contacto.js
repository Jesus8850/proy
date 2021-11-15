import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";

export default function Contacto() {
   const { cartItems } = useContext(CartContext);
   const [contactForm, setContactForm] = useState({
       "nombre": "",
       "email": "",
       "nomtarjeta": "",
       "numtarjeta": "",
       "telefono": "",
       "emailconf": "",
   })

   const addOrder = (e) => {
      e.preventDefault();

      if (contactForm.email == contactForm.emailconf) {
         const generarOrden = {
            buyer: {
               mail: contactForm.email,
               emailconf: contactForm.emailconf,
               nombre: contactForm.nombre,
               nomtar: contactForm.nomtarjeta,
               numtar: contactForm.numtarjeta,
               tel: contactForm.telefono,
            },
            productos: cartItems,
         };

         const agregaOrden = async (generarOrden) => {
            const orderFirebase = collection(db, "orders");
            const order = await addDoc(orderFirebase, generarOrden);
            alert(order.id);
         };

         agregaOrden(generarOrden);
      } else {
         alert("LOS MAILS NO COINCIDEN");
      }
   };

   const updateField = e => {
       setContactForm({...contactForm, [e.target.name]: e.target.value})
   }

   console.log(contactForm)

   return (
      <form id="pago" onSubmit={addOrder}>
         <fieldset>
            <legend>Datos del comprador</legend>
            <ol>
               <li>
                  <label for="Nombre: ">Nombre</label>
                  <input
                    onChange={updateField}
                     type="text"
                     id="nombre"
                     name="nombre"
                     type="text"
                     placeholder="Escribe tu nombre completo"
                     required
                     autofocus
                  ></input>
               </li>
               <li>
                  <label for="email: ">Email</label>
                  <input
                  onChange={updateField}
                     type="email"
                     id="email"
                     name="email"
                     placeholder="Escribe tu e mail"
                     required
                     autofocus
                  ></input>
               </li>
               <li>
                  <label for="confirmar email: ">Confirmar Email</label>
                  <input
                  onChange={updateField}
                     type="email"
                     id="emailconf"
                     name="emailconf"
                     placeholder="Confirma tu e mail"
                     required
                     autofocus
                  ></input>
               </li>
               <li>
                  <label for="telefono: ">Teléfono</label>
                  <input
                  onChange={updateField}
                     type="text"
                     id="telefono"
                     name="telefono"
                     placeholder="Ingresa tu telefono"
                     required
                     autofocus
                  ></input>
               </li>
            </ol>
         </fieldset>
         <fieldset>
            <legend>Datos de tarjeta de crédito o débito</legend>
            <ol>
               <li>
                  <label for="nomtarjeta">Nombre Tarjeta</label>
                  <input
                  onChange={updateField}
                     type="text"
                     id="nomtarjeta"
                     name="nomtarjeta"
                     placeholder="nombre tarjeta"
                     required
                     autofocus
                  ></input>
               </li>
               <li>
                  <label for="numtarjeta">Numero Tarjeta</label>
                  <input
                  onChange={updateField}
                     type="text"
                     id="numtarjeta"
                     name="numtarjeta"
                     placeholder="numero tarjeta"
                     required
                     autofocus
                  ></input>
               </li>
            </ol>
         </fieldset>
         -------------------------------------------------
         <fieldset>
            <input type="submit" value="CONFIRMAR ORDEN"></input>
         </fieldset>
      </form>
   );
}