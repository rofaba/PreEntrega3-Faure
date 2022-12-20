import React from "react";
import { Link } from "react-router-dom";



const Item = (props) => {
  const categoryId=props.id;


  return (
    <div className="border-4 border-solid border-black p-3 hover:scale-105 duration-300 shadow-xl">
      <div className="w-56 h-96 border-2 border-solid border-black72 p-2 rounded-lg text-center">
        <h3> Id: {props.id} </h3>
        <h3> Título: {props.name} </h3>
        <h3> Precio: {props.price} </h3>
        <br></br>
        <div className="flex justify-center">
        <img className="border-4 w-36 h-36" src={props.pictureURL} alt={props.title} /> 
        </div>
       
        
        <Link to={`/${categoryId}`}>
              <button className = "border-2 border-solid border-black p-1 m-4 hover:bg-slate-300  " > Ver más </button>
        </Link>
        
        <p> Stock Disponible: {props.stock} </p>
      </div>
    </div>
  );
};

export default Item;
