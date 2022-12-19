import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";


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
  //la API no devuelve stock, se fija de manera temporal en 5.
  const stock = 5;
  const indice = 1;
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  //id del producto a mostrar en forma detallada
  let {id} = useParams()

useEffect(() => {
    axios
    .get(`https://api.escuelajs.co/api/v1/products/${id}`)
    // .then((res) => (res.json))
    // .then((data) => console.log(data))


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
      <Link to='/'>
      <h2 className = "text-center text-xl bg-zinc-200 py-4" > VOLVER A PRODUCTOS </h2>
    </Link>
    </>
  );
};
export default ItemDetailContainer;
