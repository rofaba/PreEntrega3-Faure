import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import axios from 'axios';


// contador -------------------------------------
const onAdd = (contador) => {
  if (contador < 1) {
    alert("No agregaste productos al carrito");
  } else {
    if (contador !== 0) {
      alert("se agregó " + contador + " productos al carro");
    }
  }
};

//Item --------------------------------

const ItemDetailContainer = (props) => {
  const stock = 5;
  const indice = 1;
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
    .get('https://api.escuelajs.co/api/v1/products?offset=0&limit=1')
    // .then((response) => console.log(response.data))
    .then((res) => setItem(res.data), Error)
    // .catch((error) => console.log(error))
    .finally(()=> setLoading(false))
      
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-96">
          <br></br>
          <p className="text-gray-400 animate-bounce text-2xl items-center flex justify-center">
            {" "}
            - - obteniendo detalles del producto - -{" "}
          </p>
          <br></br>
        </div>
      ) : (
        <div>
          <ItemDetail producto={item} stock={stock} onAdd={onAdd} indice={indice}  />
        </div>
      )}
    </>
  );
};
export default ItemDetailContainer;
