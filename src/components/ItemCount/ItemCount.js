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

  // Disable Button
  let disableButton;
  let buttonClass;

  contador > stock ? (disableButton = true) : (disableButton = false);

  disableButton == false
    ? (buttonClass = "rounded-full text-2xl p-4 w-72 m-5 bg-slate-300")
    : (buttonClass = "rounded-full text-2xl p-4 w-72 m-5 bg-red-400");

  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-2xl mt-10 underline"> Un producto cualquiera </h1>
      <p>Stock disponible: {stock} </p>

      <div className="flex">
        <button className="w-24 text-4xl" onClick={removeItem}>
          {" "}
          -{" "}
        </button>
        <h1 className="text-4xl pt-3"> {contador} </h1>
        <button className="w-24 text-4xl" onClick={addItem}>
          {" "}
          +{" "}
        </button>
      </div>

      <button
        disabled={disableButton}
        className={buttonClass}
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
