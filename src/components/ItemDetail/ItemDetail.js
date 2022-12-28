import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
const {indice, stock, onAdd, producto} = props;


  return (
    <div className="detail flex justify-center items-center leading-7 w-1/3 bg-slate-200 border-2 border-solid border-black p-4 ">
      <div className="flex flex-col w-4/5 h-4/5 border-2 border-solid border-black bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold"> Id : {producto.id} </h3>
        <h3 className="font-bold"> Título : {producto.title} </h3>
        <h3 className="font-bold"> Precio : {producto.price} </h3>
        <p className="text-base"> Descripción: {producto.description} </p>
        <br></br>
        
        <div className="flex justify-center"><img className="border-4 p-2 w-48 h-48" src={producto.images[0]} alt="{producto.title}"/>
        </div>

        < ItemCount producto = { producto } stock={producto.stock} onAdd={onAdd} indice={indice}/>
       
      </div>
    </div>
  );
};

export default ItemDetail;
