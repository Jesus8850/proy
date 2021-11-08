import React from "react";

export default function Contact() {

    return(
<form id="consulta">
<fieldset>
<legend>Datos del usuario</legend>
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
<li>
<label for="Consulta: ">Consulta</label>
<input type="text" required>
</input>
</li>
</ol>
</fieldset>
-------------------------------------------------
<fieldset>
<button type="submit">Enviar Consulta</button>
</fieldset>
</form>

    )
}