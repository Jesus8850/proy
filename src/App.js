import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Producto from './components/Product/Product';
import ItemListConteiner from './components/Product/ItemListConteiner';

function App() {
  return (
      <>
      
      <NavBar />
      
      <Producto nombre="Jesus" apellido= "Guerrieri" />
      <ItemListConteiner/>
      
      </>
  );
}

export default App;
