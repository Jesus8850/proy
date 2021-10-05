import React from "react";
import { useParams } from "react-router";
import ItemDetailConteiner from "../components/Product/ItemDetailConteiner";

export default function PageProd() {
const {idProduct} = useParams()
    return(
        <><p>Id de producto = {idProduct}</p>
        <ItemDetailConteiner /></>

    )
}