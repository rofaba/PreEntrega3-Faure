import carro from "../../assets/img/carrito.jpeg";
import { Link } from 'react-router-dom';

const CartWidget = (props) => {
  return (
    <Link to="/cart">
      <div className="flex items-center pt-6">
        <img
          style={{ width: "100px", height: "100px" }}
          alt="imagen de carro"
          src={carro}
        ></img>
        <span className="text-3xl"> {props.number} </span>
      </div>
    </Link>
  );
};
export default CartWidget;
