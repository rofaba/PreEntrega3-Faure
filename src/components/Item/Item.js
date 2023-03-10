import React from "react";
import { Link } from "react-router-dom";



const Item = (props) => {
  const categoryId=props.id;


  return (
    <div className="bg-white border-2 border-solid border-black p-3 shadow-2xl hover:scale-105 duration-300">
      <div className="w-64 h-96 border-2 border-solid border-black72 p-2 rounded-lg text-center">
        <h3> Id: {props.id} </h3>
        <h3> Título: {props.name} </h3>
        <h3> Precio: {props.price} </h3>
        <br></br>
        <div className="flex justify-center">
        <img className="w-36 h-36" src={props.pictureURL} alt={props.title} /> 
        </div>
       
        
        <Link to={`/${categoryId}`}>
              <button className = "bg-slate-100 border-2 border-solid border-black p-1 m-4 hover:bg-slate-300  " > Ver Detalles </button>
        </Link>
        
        <p> Stock Disponible: {props.stock} </p>
      </div>
    </div>
  );
};

export default Item;
