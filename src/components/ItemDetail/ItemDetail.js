import React from "react";
import './ItemDetail.css'

const ItemDetail = ({ producto }) => {
  return (
    <div className = "detail flex justify-center items-center leading-10 w-1/3 bg-slate-200 border-2 border-solid border-black p-6 ">
      
    <div className = "flex flex-col w-4/5 border-2 border-solid border-black bg-slate-100 p-4 rounded-lg text-center">
        <h3> Id: {producto.id} </h3>
        <h3> Título: {producto.name} </h3>
        <h3> Precio: {producto.price} </h3>
        <p> Descripción: {producto.description} </p>
        <br></br>
        <img className="border-4 p-8" src={producto.pictureURL} />
        
        {/* agregar al carrito */}
        <div className="flex justify-center m-4">
            <button className = "h-9 bg-slate-400 border-dotted border-s border-black w-6 mr-2"> - </button>
            <p className=" flex text-xl items-center"> 1 </p>
            <button className = "h-9 bg-slate-400 border-dotted border-s border-black w-6 ml-2"> + </button>
            <button className = "h-9 bg-slate-400 border-dotted border-s border-black w-40 ml-8"> Agregar al Carrito</button>
        
            </div>
        <p className = "mt-8"> Stock Disponible: {producto.stock} </p>
        </div>
    </div>
  )};

export default ItemDetail;
