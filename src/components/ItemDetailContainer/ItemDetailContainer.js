import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = (props) => {
 
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);

  const getItem = new Promise((res, rej) => {
    setTimeout(() => {
      setLoading(false);

      // llamado a un único producto para probar

      fetch("https://fakestoreapi.com/products/2")
        .then((res) => res.json())
        .then((json) => res(json));
    }, 2000);
  });

  useEffect(() => {
    setLoading(true);
    getItem
      .then((data) => {
        console.log(data);
        setItem(data);
      })
      .catch(() => {
        console.log(
          "ha ocurrido un error al obtener detalles del producto",
          Error
        );
      });
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
          <ItemDetail producto={item} />
        </div>
      )}
    </>
  );
};
export default ItemDetailContainer;
