import React, {createContext,useState,useEffect} from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

const[carta, setCarta] = useState([])

  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [price, setPrice] = useState(0)


  useEffect(() => {
    setTotal(handleTotal())
    setPrice(handleTotalPrice())
  }, [cartItems])
      
  // * Agrego un item al carrito.
  function addItem (item, count) {
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

  console.log("trae cart context ", cartItems)

  // * Reviso si el item esta en el carrito.
  const isInCart = (item) => {
    // BUSCO si encuentro al menos 1 elemento que cumpla con la condicion.
    return cartItems && cartItems.some(element => element.item.id === item.id)
  }

const removeItem = (item) => {
  console.log("quiere eliminar ", item.id)
//    if (isInCart(item)) {
      console.log("elimina ", item.id)
      // 1. FILTRO mi carrito para obtener el resto de los items.
      const cartElements = cartItems.filter(element => element.item.id !== item.id) || []
      // 2. actualizo el carrito, si solo tenia un elemento lo inicializo como []
      setCartItems([...cartElements])
      console.log("los items son ", cartItems)
 //   } 
  }

  const removeOneItem = item => {
    if (isInCart(item)) {
      // 1. BUSCO el producto por el id.
      let cartElement = cartItems.find(element => element.item.id === item.id)
      if (cartElement.count === 1) {
        // 1.a. Si solo tengo un elemento lo remuevo con la funcion removeItem()
        removeItem(item)
      } else {
        // 1.a. Creo una copia de mi carrito
        let cart = cartItems
        // 1.b. Mapeo el carrito
        cart.map(element => {
          // 1.c. Resto 1 al contador
          if (element.item.id === item.id) {
            element.count = element.count - 1
          }
          return element
        })
        // 1.d. actualizo el carrito.
        setCartItems([...cart])
      }
    } 
  }


  // * BONUS: Mapeo carrito obtengo precio total
  const handleTotalPriceByItem = () => {
    // 1. Creo una copia del carrito donde trabajar
    let newCartItems = cartItems
    // 2. Mapeo mi array y lo actualizo
    const test = newCartItems.map(element => {
      // 3. Retorno un objeto con el elemento + el total de ese producto
      return {
        ...element,
        price: element.item.precio * element.count
      }
    })    
    console.log(`test`, test)
    return test
  }

  // * BONUS: Obtengo el total de elementos del carrito
  const handleTotal = () => {  
    // 1. Inicializo el reduce
    const initialValue = 0
    return (
      cartItems &&
      cartItems.reduce(
        (accumulator, currentValue) => {          
          // 2. Acumulo el total
          return accumulator + currentValue.count                              
        },
        initialValue
      )    
    )
  }

  // * BONUS: Obtengo el precio total del carrito
  const handleTotalPrice = () => {
    // 1. Creo un carrito auxiliar con el precio total por producto.
    const cartAux = handleTotalPriceByItem()
    // 2. Inicializo el reduce
    const initialValue = 0
    return (
      cartAux &&
      cartAux.reduce(
        (accumulator, currentValue) => {          
          // 3. Acumulo el total
          return accumulator + currentValue.price                              
        },
        initialValue
      )    
    )
  }

  const data = {cartItems,removeItem,addItem,removeOneItem,handleTotalPrice,handleTotal,total,price}

return(
    <CartContext.Provider value = {data}>
        {children}
    </CartContext.Provider>
)
}

export {CartProvider}
export default CartContext;