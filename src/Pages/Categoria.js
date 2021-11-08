import React from "react";
import { useParams } from "react-router";
import ItemListConteiner from "../components/Product/ItemListConteiner";

export default function Categoria() {
    const {idcat} = useParams()
    return(
        <><ItemListConteiner /></>

    )
}