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
  
  contador > stock ? disableButton = true : disableButton = false;

  disableButton == false ? buttonClass ="rounded-full text-3xl p-10 w-48 bg-slate-300" : buttonClass = "rounded-full text-3xl p-10 w-48 bg-red-400";
  

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

      <button disabled = {disableButton} 
        className = {buttonClass}
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
