
import { Link } from 'react-router-dom';

const Cart = () => {
    return ( 
<div>
      <h1 className="text-center text-4xl p-4"> CARRO DE COMPRAS</h1>
      <p className="text-center text-2xl p-4"> Acá encontrarás pronto el carro de compras con tus productos favoritos</p>

      <Link to={"/"}>
      <div className="flex justify-center mb-4">
          <button className="text-center text-xl bg-zinc-200 p-4 rounded-xl hover:text-xl hover:bg-slate-300 " >Volver a HOME</button>
      </div>
      </Link>
    </div>

       
     );
}
 
export default Cart;