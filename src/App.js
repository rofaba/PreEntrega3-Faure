import './App.css';
import Fragment from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";

function App() {
    return (
    <div>
     
    < NavBar />
    {/* NavBar contiene a CartWidget */}

    < ItemListContainer gretting="Bienvenido, acá podrás ver el listado de productos de nuestra tienda" />
    
    </div>
  );
}

export default App;
