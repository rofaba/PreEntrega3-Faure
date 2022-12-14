import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  return (
    <div className="detail flex justify-center items-center leading-7 w-1/3 bg-slate-200 border-2 border-solid border-black p-6 ">
      <div className="flex flex-col w-4/5 h-4/5 border-2 border-solid border-black bg-slate-100 p-4 rounded-lg">
        <h3> <spam className="font-bold"> Id : </spam> {producto.id} </h3>
        <h3> <spam className="font-bold"> Título : </spam> {producto.title} </h3>
        <h3> <spam className="font-bold"> Precio : </spam> {producto.price} </h3>
        <p className="text-base"> Descripción: {producto.description} </p>
        <br></br>
        <div className="flex justify-center"><img className="border-4 p-8 w-36 h-36" src={producto.image} />
        </div>
        <div className="flex justify-center m-4">
          <button className="h-9 bg-slate-300 border-dotted border-s border-black w-6 mr-2">
            {" "}
            -{" "}
          </button>
          <p className=" flex text-xl items-center"> 1 </p>
          <button className="h-9 bg-slate-300 border-dotted border-s border-black w-6 ml-2">
            {" "}
            +{" "}
          </button>
          <button className="h-9 bg-slate-300 border-dotted border-s border-black w-40 ml-8">
            {" "}
            Agregar al Carrito
          </button>
        </div>

        {/* la API de prueba no devuelve stock - lo fijo en 5 temporalmente */}
        <p className="mt-8"> Stock Disponible: 5 </p>
      </div>
    </div>
  );
};

export default ItemDetail;
