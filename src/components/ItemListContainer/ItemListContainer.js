import props from "react";
import ItemCount from "../ItemCount/ItemCount.js";
import { useState } from "react";

const ItemListContainer = (props) => {
  const stock = 5;
  const indice = 0;

  const onAdd = (contador) => {
    if (contador < 1) {
      alert("No agregaste productos al carrito");
    } 
    if (contador > stock) { 
      alert("El número seleccionado es mayor al stock disponible");
    } else {
      alert("se agregó " + contador + " productos al carro");
    }
  };

  return (
    <div className="bg-slate-200 h-96">
      <h1 className="text-3xl text-center p-4 ">Lista de Productos</h1>
      <br></br>
      <p className="text-2xl text-center">{props.gretting}</p>

      <ItemCount stock={stock} onAdd={onAdd} indice={indice} />
    </div>
  );
};

export default ItemListContainer;
