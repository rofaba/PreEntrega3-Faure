import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cartproducts, removeItem, clearCart } = useContext(cartContext);

  return (
    <>
      <h1 className="text-center text-4xl p-4"> CARRO DE COMPRAS</h1>
      <div className="grid-col gap-12 py-6 px-16 justify-center">
        {/* acá falta verificar que el carrito conteng productos */}

        <tr >
          <th className="px-16" > Codigo</th>
          <th className="px-16" > Nombre producto</th>
          <th className="px-16" > Precio </th>
          <th className="px-16" > Cantidad </th>
          <th className="px-16" > Action </th>
        </tr>
        {cartproducts.map((product) => (
          <>
            <tr className="grid-col-3" >
              <td className="px-16" >{product.id} </td>
              <td className="px-16" >{product.name} </td>
              <td className="px-16" >{product.price}</td>
              <td className="px-16" >{product.qty}</td>
              <td> componente boton eliminar del carro</td>
            </tr>
          </>
        ))}

        <br></br>
        <button className="p-4 bg-slate-200" onClick={removeItem}>
          {" "}
          Vaciar Carrito{" "}
        </button>
      </div>
    </>
  );
};

export default Cart;
