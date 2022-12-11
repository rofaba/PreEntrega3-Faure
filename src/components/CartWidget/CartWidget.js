import carro from "../../assets/img/carrito.jpeg";

const CartWidget = () => {
  return (
    <div className="flex items-center">
      <img
        style={{ width: "100px", height: "100px" }}
        alt="imagen de carro"
        src={carro}
      ></img>
    <span className="text-3xl"> 07 </span>
    </div>
  );
};
export default CartWidget;
