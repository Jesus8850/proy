import React from "react";
import { useParams } from "react-router";
import Button from '@material-ui/core/Button';
import ItemDetailConteiner from "../components/Product/ItemDetailConteiner";
import { Link } from 'react-router-dom';

export default function PageProd() {
const {id} = useParams()
    return(
        <>
        <ItemDetailConteiner />
        <Link to={`/Cart/${id}`}><Button></Button></Link>
        </>
    )
}