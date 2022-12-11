import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <NavBar />
      {/* NavBar contiene a CartWidget */}

      <ItemListContainer gretting="Bienvenido, lista de productos disponibles" />
      <ItemDetailContainer />
    
    
    </div>
  );
}

export default App;
