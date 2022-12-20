import React from "react";
import { Link } from "react-router-dom";



const Item = (props) => {
  const categoryId=props.id;


  return (
    <div className="border-4 border-solid border-black p-3">
      <div className="w-56 h-96 border-2 border-solid border-black72 p-4 rounded-lg text-center">
        <h3> Id: {props.id} </h3>
        <h3> Título: {props.name} </h3>
        <h3> Precio: {props.price} </h3>
        <br></br>
        <img className="border-4" src={props.pictureURL} alt={props.title} />
        
        <Link to={`/${categoryId}`}>
              <button className = "border-2 border-solid border-black p-1 m-4" > Ver más </button>
        </Link>
        <br></br>
        {/* API no devueve stock, temporalmente lo fijo en 5 unidades */}
        <p> Stock Disponible: {"5"} </p>
      </div>
    </div>
  );
};

export default Item;
