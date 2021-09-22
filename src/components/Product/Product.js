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

const Producto = (props) => {
    return (            
    <div>
        Nombre: {props.nombre} <br/>
        Apellido:  {props.apellido}
    </div>)
}

export default Producto