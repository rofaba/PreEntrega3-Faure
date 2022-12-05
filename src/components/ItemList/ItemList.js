import React from "react";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <div className="flex flex-wrap justify-around">
      {productos.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          pictureURL={product.pictureURL}
          stock={product.stock}
        />
      ))}
    </div>
  );
};

export default ItemList;
