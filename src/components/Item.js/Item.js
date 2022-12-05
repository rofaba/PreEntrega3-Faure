import React from 'react';

const Card = (props) => {

return (
    <div>
      <div>
        <h3> ID: {props.id} </h3>
        <h3> Título: {props.title} </h3> 
        <p> Descripción: {props.description} </p>
        <h3> Precio: {props.price} </h3>
        <img src={props.pictureURL} />
        <button> Ver más </button>
        <p> Stock Disponible: {props.stock} </p>
      </div>
    </div>
  );
};

export default Card;