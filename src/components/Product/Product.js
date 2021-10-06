import { Button } from "@material-ui/core";
import React from "react";

class Product extends React.Component{

    render() {
        return (
            <div>
                Componente de tipo clase
            </div>
        )
    }
}

const Producto = (item) => {
    return (            
    <div>
        <br/>
        <Button>Detalle de {item.nombre} </Button>
    </div>)
}

export default Producto