import props from "react";
import ItemCount from "../ItemCount/ItemCount.js";

import ItemList from "../ItemList/ItemList.js";

const ItemListContainer = (props) => {
  const stock = 5;
  const indice = 0;

  let productos = [
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
    }
  ];
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

      <ItemList productos={productos} />

      <ItemCount stock={stock} onAdd={onAdd} indice={indice} />
    </div>
  );
};
export default ItemListContainer;
