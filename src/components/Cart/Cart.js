
import { Link } from 'react-router-dom';

const Cart = () => {
    return ( 
        <>
            <h1 className="text-center text-4xl"> Este será el carrito de compras </h1>
            <br></br>

            <Link to = "/">
            <p className = "text-center text-xl bg-zinc-200" > VOLVER A HOME </p>
            </Link>
            
        </>
       
     );
}
 
export default Cart;