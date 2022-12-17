import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <NavBar />
      {/* NavBar contiene a CartWidget */}
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer gretting="Bienvenido, lista de productos disponibles" />
          }
        />

        <Route path="/cart" element={<Cart />} />

        <Route path="/itemdetailcontainer" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
