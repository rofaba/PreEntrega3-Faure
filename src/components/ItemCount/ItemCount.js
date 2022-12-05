import { useState } from "react";

const ItemCount = ({ indice, stock, onAdd }) => {
  const [contador, setContador] = useState(indice);

  const addItem = () => {
    setContador(contador + 1);
  };
  const removeItem = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  const agregarCarro = (contador) => {
    if (contador > stock) {
      alert(
        "lo siento, no tenemos stock suficiente para agregar " +
          contador +
          " productos al carro"
      );
    }
    onAdd(contador);
  };
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-2xl mt-10 underline"> Un producto cualquiera </h1>
      <p>Stock disponible: {stock} </p>

      <h1 className="text-4xl pt-3"> {contador} </h1>
      <div className="flex-row">
        <button className="w-24 text-4xl" onClick={removeItem}>
          {" "}
          -{" "}
        </button>
        <button className="w-24 text-4xl" onClick={addItem}>
          {" "}
          +{" "}
        </button>
      </div>

      <button
        className="rounded-full text-3xl p-10 w-48 bg-slate-300"
        onClick={() => {
          onAdd(contador);
        }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;
