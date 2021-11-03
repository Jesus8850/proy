import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export const Item = ({ item }) => {

  return (<div>
    <img src={`/img/${item.img}`} alt="C1" />
    <br/>
    Articulo:  {item.titulo}
    <br/>
    Categoria:  {item.categoria}
    <br/>
    Descripcion: {item.descripcion}
    <br/>
    Precio $:  {item.precio}
    <br/>
    <Link to={`/PageProd/${item.id}`}><Button>Ver Detalle</Button></Link>
    <br/><br/>
</div>);
};

