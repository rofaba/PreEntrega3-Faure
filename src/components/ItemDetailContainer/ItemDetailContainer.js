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

  let {id} = useParams()

useEffect(() => {
    axios
    .get(`https://dummyjson.com/products/${id}`)
   
    .then((res) => setItem(res.data), Error)
  
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
      <div className="flex justify-center mb-4">
          <button className="text-center text-xl bg-zinc-200 p-4 mt-4 rounded-xl" > Volver a Productos</button>
      </div>
    </Link>
    </>
  );
};
export default ItemDetailContainer;
