import React, {createContext,useState} from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

const[carta, setCarta] = useState([])


const data = (cartItems,removeItem,addItem)


  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)
  const [price, setPrice] = useState(0)
      
  // * Agrego un item al carrito.
  const addItem = (item, count) => {
    let cartElement = {item, count}
    let cartAux = []
    if (isInCart(item)) {
      cartElement = cartItems.find(element => element.item.id === item.id)
      cartElement.count = cartElement.count + count
      cartAux = [...cartItems]
    } else {
      cartAux = [cartElement, ...cartItems]
    }
    setCartItems(cartAux)
  }

  // * Reviso si el item esta en el carrito.
  const isInCart = (item) => {
    // BUSCO si encuentro al menos 1 elemento que cumpla con la condicion.
    return cartItems && cartItems.some(element => element.item.id === item.id)
  }

const removeItem = (item) => {
    if (isInCart(item)) {
      // 1. FILTRO mi carrito para obtener el resto de los items.
      const cartElements = cartItems.filter(element => element.item.id !== item.id) || []
      // 2. actualizo el carrito, si solo tenia un elemento lo inicializo como []
      setCartItems([...cartElements])
    } 
  }


return(
    <CartContext.Provider value = {data}>
        {children}
    </CartContext.Provider>
)
}

export {CartContext}
export default CartContext;