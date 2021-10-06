import React from 'react';

export const Item = ({ item }) => {

  return (<div>
    {item.img}
    <br/>
    Articulo:  {item.titulo}
    <br/>
    Categoria:  {item.categoria}
    <br/>
    Descripcion: {item.descripcion}
    <br/>
    Precio $:  {item.precio}
    <br/><br/>
</div>);
};