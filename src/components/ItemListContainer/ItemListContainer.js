import props from 'react';

const ItemListContainer = (props) => {
  return (
  <div className="bg-slate-200 h-96">


    <h1 className='text-3xl text-center p-4 '>Lista de Productos</h1>
    <br></br>
    <p className="text-2xl text-center">{props.gretting}</p>
  </div>
)
};

export default ItemListContainer;
