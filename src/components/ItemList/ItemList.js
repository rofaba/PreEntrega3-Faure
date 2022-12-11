import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-12 py-6 px-16 justify-center">
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
