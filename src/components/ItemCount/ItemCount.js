import { useState } from "react";

const ItemCount = (props) => {
 
  const [contador, setContador] = useState(0);

  const addItem = () => {
    if (contador < props.stock) {
      setContador(contador + 1);
    } else {
      alert("Lo siento, no hay más stock de este producto");
    }
  };
  const removeItem = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-2xl mt-10 underline"> Un producto cualquiera </h1>

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
      <button className="rounded-full text-3xl p-10 w-48 bg-slate-300">
        {" "}
        Agregar al Carrito{" "}
      </button>
    </div>
  );
};

export default ItemCount;
