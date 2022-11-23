import carro from "../assets/img/carrito.jpeg";

const CartWidget = () => {
  return (
    <div>
      <img
        style={{ width: "150px", height: "150px" }}
        alt="imagen de carro"
        src={carro}
      ></img>
    <span style={{ fontSize:"50px" }}> 01</span>
    </div>
  );
};
export default CartWidget;
