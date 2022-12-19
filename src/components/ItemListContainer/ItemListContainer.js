import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.js";
import axios from 'axios'; 
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  let {categoryId} = useParams();

  let callAPI = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=10';

  if (categoryId) {
     callAPI = `https://api.escuelajs.co/api/v1/categories/${categoryId}/products?offset=0&limit=10`;
  };


//USEEFFECT CON API
useEffect(() => {

  axios
  .get(`${callAPI}`)
  
  .then((res) => setProductos(res.data), Error)

    .catch((error) => console.log(error))
    .finally(()=> setLoading(false))
    }, [categoryId])

  // contador ------------------

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