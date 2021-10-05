import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListConteiner from "../components/Product/ItemListConteiner";
import Contacto from "../Pages/Contacto";
import NotFoundPage from "../Pages/NotFoundPage";
import Home from "../Pages/Home";
import PageProd from "../Pages/PageProd";
import NavBar from "../components/NavBar/NavBar";

export default function AppRouter(){

    return(
        <BrowserRouter>
        <NavBar/>
        <Switch>
        <Route path = '/contacto' component = {Contacto}/>
        <Route path = '/pageprod' component = {PageProd}/>
        <Route exact path = '/'component = {Home}/>
        <Route path = '*' component = {NotFoundPage}/>

        </Switch>
        
        </BrowserRouter>


    )
}