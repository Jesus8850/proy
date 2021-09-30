import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Producto from './components/Product/Product';
import ItemListConteiner from './components/Product/ItemListConteiner';
import ItemCount from './components/Product/ItemCount';
import ItemDetailConteiner from './components/Product/ItemDetailConteiner';

function App() {
  return (
      <>
      
      <NavBar />

      <ItemCount stock = "5" initial = "1" />
      
      <ItemListConteiner/> 

      <Producto nombre="Jesus" apellido= "Guerrieri" />

      <ItemDetailConteiner/>

      </>
  );
}

export default App;
