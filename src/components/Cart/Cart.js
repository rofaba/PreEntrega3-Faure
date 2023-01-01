import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";

const Cart = () => {
  const { totalpagar, qtycartproducts, cartproducts, removeItem, clearCart } = useContext(cartContext);
    
  console.log(totalpagar)
  console.log(qtycartproducts)

  return (
    <div>
      <h1 className="text-center text-4xl p-4"> CARRO DE COMPRAS</h1>

      {cartproducts.length === 0 ? (
        <h1 className="text-center text-3xl p-6">
          {" "}
          El carrito de compras no tiene productos
        </h1>
      ) : (
        <div className="grid-col gap-12 py-6 px-16 justify-center">
          <tr>
            <th className="px-16"> Codigo</th>
            <th className="px-16"> Imagen</th>
            <th className="px-16"> Nombre producto</th>
            <th className="px-16"> Fabricante</th>
            <th className="px-16"> Precio </th>
            <th className="px-16"> Cantidad </th>
            <th className="px-16"> Subtotal </th>
            <th className="px-16"> Action </th>
          </tr>

          {cartproducts.map((product) => (
            <tr className="grid-col-3 items-center ">
              <td className="px-16">{product.id} </td>
              <td className="px-16">
                {" "}
                <img
                  className=" w-20 h-16 mt-4"
                  src={product.thumbnail} alt={product.title}
                ></img>{" "}
              </td>
              <td className="px-16">{product.name} </td>
              <td className="px-16">{product.brand} </td>
              <td className="px-16">$ {product.price}</td>
              <td className="px-16">{product.qty}</td>
              <td className="px-16">$ {product.qty * product.price}</td>
              <td>
                {" "}
                <button
                  className="ml-14 my-1 p-2 bg-slate-200"
                  onClick={() => {
                    removeItem(product.id);
                  }}
                >
                  {" "}
                  Eliminar{" "}
                </button>
              </td>
            </tr>
          ))}

          <br></br>

          <div>
            <div className="flex justify-center mb-4">
              <button className="p-4 bg-slate-200" onClick={clearCart}>
                {" "}
                Vaciar Carrito{" "}
              </button>
            </div>

            
          </div>
        </div>
      )}
      <Link to="/">
              <div className="flex justify-center mb-4">
                <button className="p-4 bg-slate-200"> Seguir comprando </button>
              </div>
            </Link>
      
    </div>
  );
};

export default Cart;
