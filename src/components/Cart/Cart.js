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
       
        {cartproducts.map((product) => (
        
          
        <p>{product.id} {product.name} {product.price} {product.qty} </p>
          
        
        ))}
        <br></br>    
        <button className="p-4 bg-slate-200" onClick={removeItem}> Vaciar Carrito </button>

      </div>
    </>
  );
};

export default Cart;
