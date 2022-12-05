import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      {/* NavBar contiene a CartWidget */}

      <ItemListContainer gretting="Bienvenido, lista de productos disponibles" />
    </div>
  );
}

export default App;
