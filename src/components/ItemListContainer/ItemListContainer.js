import { props, useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount.js";
import ItemList from "../ItemList/ItemList.js";
import data from "../../data.json";
import axios from 'axios'; 
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {
  const stock = 5;
  const indice = 1;
  
  // lógica React ----------------

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  let {categoryId} = useParams();

  let callAPI = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=10';

  if (categoryId) {
     callAPI = `https://api.escuelajs.co/api/v1/categories/${categoryId}/products?offset=0&limit=10`;
  };

  //PROMESA
  // const promesa = new Promise((res, rej) => {
  //   setTimeout(() => {
  //     res(catWelcome);
  //     setLoading(false);
  //   }, 2000);
  // });

  //USEEFFECT CON ARRAY
  // useEffect(() => {
  //   setLoading(true);
  //   promesa
  //     .then((data) => {
  //       setProductos(data);
  //     })
  //     .catch(() => {
  //       console.log("ha ocurrido un error al obtener los productos", Error);
  //     });
  // }, []);

//USEEFFECT CON API
useEffect(() => {

  axios
  .get(`${callAPI}`)
  
  .then((res) => setProductos(res.data), Error)

    .catch((error) => console.log(error))
    .finally(()=> setLoading(false))
    }, [categoryId])

  // contador ------------------

  function onAdd(contador) {
    if (contador < 1) {
      alert("No agregaste productos al carrito");
    } else {
      if (contador !== 0) {
        alert("se agregó " + contador + " productos al carro");
      }
    }
  }


  return (
      
    <div className="bg-slate-200 h-auto">
      <br></br>
      <h1 className="text-2xl text-center">{props.gretting}</h1>
      <br></br>

      {loading ? (
        <>
          <br></br>
          <p className="text-gray-400 animate-bounce text-2xl items-center flex justify-center">
            {" "}
            - - obteniendo productos - -{" "}
          </p>
          <br></br>
        </>
      ) : (
        <div>
          <ItemList lista={productos} />
          
        </div>
      )}
    </div>
  );
};
export default ItemListContainer;