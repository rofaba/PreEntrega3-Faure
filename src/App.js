import './App.css';
import Fragment from 'react';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    return (
    <div>
     
    < NavBar />
    {/* NavBar contiene a CartWidget */}

    < ItemListContainer gretting="Bienvenido, pronto podrás ver en este espacio el listado de productos de nuestra tienda." />
    
    </div>
  );
}

export default App;
