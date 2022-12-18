import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
const {indice, stock, onAdd, producto} = props;
console.log(producto)
  return (
    <div className="detail flex justify-center items-center leading-7 w-1/3 bg-slate-200 border-2 border-solid border-black p-6 ">
      <div className="flex flex-col w-4/5 h-4/5 border-2 border-solid border-black bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold"> Id : {producto[0].id} </h3>
        <h3 className="font-bold"> Título : {producto[0].title} </h3>
        <h3 className="font-bold"> Precio : {producto[0].price} </h3>
        <p className="text-base"> Descripción: {producto[0].description} </p>
        <br></br>
        <div className="flex justify-center"><img className="border-4 p-8 w-36 h-36" src={producto[0].category.image} />
        </div>

        < ItemCount stock={stock} onAdd={onAdd} indice={indice}/>
       
      </div>
    </div>
  );
};

export default ItemDetail;
