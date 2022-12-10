
import logo from "../../assets/img/logo.jpeg";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="flex justify center pl-44">
      <nav className="flex flex-row items-center">
        <img
          style={{ width: "200px", height: "200px" }}
          alt="imagen de logo"
          src={logo}
        ></img>
        <p className="text-5xl italic">
          TIENDA IMAGES
        </p>
        <ul className=" flex items-center"  style={{margin: "30px" }}>

          <li className="px-10 text-2xl">
            {" "}
            <a href="#"> Nosotros </a>{" "}
          </li>
          <li className="px-10 text-2xl">
            {" "}
            <a href="#"> Categorías </a>{" "}
          </li>
          <li className="px-10 text-2xl">
            {" "}
            <a href="#"> Cómo comprar </a>{" "}
          </li>

          <li className="px-10 text-2xl">
            {" "}
            <a href="#"> Contacto </a>{" "}
          </li>
        </ul>
      </nav>

      <CartWidget />
      
    </div>
  );
};

export default NavBar;
