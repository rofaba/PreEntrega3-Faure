import React from "react";

const ItemDetail = ({ producto }) => {
  return (
    < div className="w-64 h-96 bg-slate-200 border-2 border-solid border-black p-6 ">
      
 
        <h3> Id: {producto.id} </h3>
        <h3> Título: {producto.name} </h3>
        <h3> Precio: {producto.price} </h3>
        <p> Descripción: {producto.description} </p>
        <br></br>
        <img className="border-4" src={producto.pictureURL} />
        
        {/* agregar al carrito */}
        <div className="flex">
            <button className = "h-3 bg-slate-400 border-dotted border-s border-black w-6"> - </button>
            <p className="text-2xl"> 1 </p>
            <button className = "h-3 bg-slate-400 border-dotted border-s border-black w-6"> + </button>
            <button className = "h-3 bg-slate-400 border-dotted border-s border-black w-20"> Agregar al Carrito</button>
        
            </div>
        <p> Stock Disponible: {producto.stock} </p>
        </div>
  )};

export default ItemDetail;
