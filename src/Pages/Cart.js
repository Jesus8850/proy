import React from "react";
import { useParams } from "react-router";

export default function Cart() {

    const {id} = useParams()

    return(
        <>
        <h3>Es el Cart</h3>
        <p>Id de producto = {id}</p>
        </>
    )
};