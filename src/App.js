import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Producto from './components/Product/Product';
import ItemListConteiner from './components/Product/ItemListConteiner';
import ItemCount from './components/Product/ItemCount';
import ItemDetailConteiner from './components/Product/ItemDetailConteiner';
import AppRouter from './AppRouter/AppRouter';
import {CartProvider} from './context/CartContext';

function App() {
  return (
<CartProvider>
  < AppRouter/>
  </CartProvider>
  )
}

export default App;
