
import { useEffect, useState, useContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import {carro} from '../../Context/CartContext' 


// contador -------------------------------------
const onAdd = (producto, contador) => {
    const fullProduct = {
        id: producto.id,
        name: producto.title,
        price: producto.price,
        qty: contador,
  }
  addItem(producto, contador)
}

//   addItem(producto, contador)
//   if (contador < 1) {
//     alert("No agregaste productos al carrito");
//   } else {
//     if (contador !== 0) {
//       alert("se agregó " + contador + " " + producto.title + " al carro");
//     }
//   }
// };

//Item --------------------------------

const ItemDetailContainer = (props) => {
 
  const { contexto } = useContext(carro)
  console.log(contexto)

// contador -------------------------------------
const onAdd = (producto, contador) => {
    const fullProduct = {
        id: producto.id,
        name: producto.title,
        price: producto.price,
        qty: contador,
  }
  
  addItem(producto, contador)

}


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
          <button className="text-center text-xl bg-zinc-200 p-4 mt-4 rounded-xl hover:text-xl hover:bg-slate-300  " > Volver a Productos</button>
      </div>
    </Link>
    </>
  );
};
export default ItemDetailContainer;
