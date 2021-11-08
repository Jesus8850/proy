import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListConteiner from "../components/Product/ItemListConteiner";
import Contact from "../Pages/Contacto";
import NotFoundPage from "../Pages/NotFoundPage";
import Home from "../Pages/Home";
import PageProd from "../Pages/PageProd";
import NavBar from "../components/NavBar/NavBar";
import Categoria from "../Pages/Categoria";
import Cart from "../Pages/Cart";
import { CartProvider } from "../context/CartContext";

export default function AppRouter(){

    return(

        <BrowserRouter>
        <NavBar/>
        <Switch>
        <Route path = '/contact' component = {Contact}/>
        <Route path = '/pageprod/:id' component = {PageProd}/>
        <Route exact path = '/'component = {Home}/>
        <Route path = '/categoria/:idcat' component = {Categoria}/>
        <Route path = '/Cart/:id' component = {Cart}/>
        <Route path = '*' component = {NotFoundPage}/>
        
        </Switch>
        
        </BrowserRouter>

    )
}