import React, {useState} from "react";
import { useParams } from "react-router";
import CartWidget from "../components/NavBar/CartWidget";

export default function Cart() {

    const {id} = useParams()

    const[showCart, setShowCart] = useState("False")



    return(
        <>
        <h3>Es el Cart</h3>
        <p>Id de producto = {id}</p>
        <CartWidget/>
        </>
    )
};