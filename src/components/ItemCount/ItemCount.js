import { useState } from "react";

const ItemCount = ({ producto, indice, stock, onAdd }) => {
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
  let buttonContent="Agregar al carrito"

  contador > stock ? (disableButton = true) : (disableButton = false);

  disableButton == false
    ? (buttonClass = "rounded-xl  text-2xl p-2 w-72 m-5 bg-slate-300 hover:bg-slate-400")
    : (buttonClass = "rounded-xl  text-2xl p-2 w-72 m-5 bg-slate-100");

  return (
    <div className=" flex flex-col justify-center items-center">
    
      <p> Stock disponible: {stock} </p>
        

      <div className="flex">
        <button className="w-24 text-5xl" onClick={removeItem}>
          {" "}
          -{" "}
        </button>
        <h1 className="text-4xl pt-3"> {contador} </h1>
        <button className="w-24 text-5xl" onClick={addItem}>
          {" "}
          +{" "}
        </button>
      </div>

      <button 
        disabled={disableButton}
        className={buttonClass}
        onClick={() => {
          onAdd(producto, contador);
        }}>

        Agregar al carrito

      </button>
    </div>
  );
};

export default ItemCount;
