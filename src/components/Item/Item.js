import React from "react";

const Item = (props) => {
  return (
    <div className="border-4 border-solid border-black p-3">
      <div className="w-56 h-72 border-2 border-solid border-black bg-slate-100 p-4 rounded-lg text-center">
        <h3> Id: {props.id} </h3>
        <h3> Título: {props.name} </h3>
        {/* <p> Descripción: {props.description} </p> */}
        <h3> Precio: {props.price} </h3>
        <br></br>
        <img src={props.pictureURL} />
        <button className = "border-2 border-solid border-black p-1 m-4" > Ver más </button>
        <br></br>
        <p> Stock Disponible: {props.stock} </p>
      </div>
    </div>
  );
};

export default Item;
