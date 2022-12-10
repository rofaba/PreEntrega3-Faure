import { props, useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount.js";
import ItemList from "../ItemList/ItemList.js";

const ItemListContainer = (props) => {
  const stock = 5;
  const indice = 0;
  let arrayProductos = [
    {
      id: 1,
      name: "Producto 1",
      price: 5.99,
      description: "Un producto muy bueno",
      pictureURL: "https://fakeimg.pl/250x100/",
      stock: 5,
    },
    {
      id: 2,
      name: "Producto 2",
      price: 8.99,
      description: "Un producto genial",
      pictureURL: "https://fakeimg.pl/250x100/",
      stock: 10,
    },
    {
      id: 3,
      name: "Producto 3",
      price: 11.99,
      description: "Un producto increible",
      pictureURL: "https://fakeimg.pl/250x100/",
      stock: 15,
    },
    {
      id: 4,
      name: "Producto 4",
      price: 19.99,
      description: "Un producto fabuloso",
      pictureURL: "https://fakeimg.pl/250x100/",
      stock: 7,
    },
    {
      id: 5,
      name: "Producto 1",
      price: 7.99,
      description: "Un producto agregado",
      pictureURL: "https://fakeimg.pl/250x100/",
      stock: 20,
    },
    {
      id: 6,
      name: "Producto 6",
      price: 5.99,
      description: "Un producto muy bueno",
      pictureURL: "https://fakeimg.pl/250x100/",
      stock: 5,
    },
    {
      id: 7,
      name: "Producto 7",
      price: 8.99,
      description: "Un producto genial",
      pictureURL: "https://fakeimg.pl/250x100/",
      stock: 10,
    },
    {
      id: 8,
      name: "Producto 8",
      price: 11.99,
      description: "Un producto increible",
      pictureURL: "https://fakeimg.pl/250x100/",
      stock: 15,
    },
    {
      id: 9,
      name: "Producto 9",
      price: 19.99,
      description: "Un producto fabuloso",
      pictureURL: "https://fakeimg.pl/250x100/",
      stock: 7,
    },
    {
      id: 10,
      name: "Producto 10",
      price: 7.99,
      description: "Un producto agregado",
      pictureURL: "https://fakeimg.pl/250x100/",
      stock: 20,
    }
  ];

  // lógica React ----------------

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(arrayProductos);
      setLoading(false);
    }, 2000);
  });

  useEffect(() => {
    setLoading(true);
    promesa
      .then((data) => {
        setProductos(data);
      })
      .catch(() => {
        console.log("ha ocurrido un error al obtener los productos", Error);
      });
  }, []);

  // contador ------------------

  const onAdd = (contador) => {
    if (contador < 1) {
      alert("No agregaste productos al carrito");
    } else {
      if (contador !== 0) {
        alert("se agregó " + contador + " productos al carro");
      }
    }
  };

  return (
    <div className="bg-slate-200 h-auto">
      <br></br>
      <p className="text-2xl text-center">{props.gretting}</p>
      <br></br>

      {loading ? (
        <>
          <br></br>
          <p className="text-gray-400 animate-bounce text-2xl items-center flex justify-center">
            {" "}
            -  -  obteniendo productos  -  -{" "}
          </p>
          <br></br>
        </>
      ) : (
        <div>
          <ItemList productos={productos} />

          <ItemCount stock={stock} onAdd={onAdd} indice={indice} />
        </div>
      )}
    </div>
  );
};
export default ItemListContainer;
