import props from 'react';

const ItemListContainer = (props) => {
  return (
  <div style={{ height: "500px", backgroundColor: "lightgrey" }}>


    <h1>Lista de Productos</h1>
    <br></br>
    <p>{props.gretting}</p>
  </div>
)
};

export default ItemListContainer;
