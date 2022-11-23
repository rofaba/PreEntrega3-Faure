// import Fragment from "react";
import logo from "../assets/img/logo.jpeg";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ display: "flex" }}>
        <img
          style={{ width: "200px", height: "200px" }}
          alt="imagen de logo"
          src={logo}
        ></img>
        <p style={{ display: "flex", margin: "50px", fontSize: "30px" }}>
          TIENDA IMAGENES
        </p>
        <ul style={{ display: "flex", margin: "30px" }}>
          <li style={{ display: "flex", margin: "30px", fontSize: "30px" }}>
            {" "}
            <a href="#"> Nosotros </a>{" "}
          </li>
          <li style={{ display: "flex", margin: "30px", fontSize: "30px" }}>
            {" "}
            <a href="#"> Productos </a>{" "}
          </li>
          <li style={{ display: "flex", margin: "30px", fontSize: "30px" }}>
            {" "}
            <a href="#"> Categorias </a>{" "}
          </li>

          <li style={{ display: "flex", margin: "30px", fontSize: "30px" }}>
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
