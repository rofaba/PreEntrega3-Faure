import React from "react";
import logo from "../../assets/img/logo.jpeg";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify center pl-48 h-40">
      <nav className="flex flex-row items-center">
        <Link to="/">
          <img
            style={{ width: "160px", height: "160px" }}
            alt="imagen de logo"
            src={logo}
          ></img>
        </Link>
        <p className="text-5xl italic">TIENDA IMAGES</p>

        <ul className=" flex items-center" style={{ margin: "30px" }}>
          <Link to="nosotros">
            <li className="px-10 text-2xl">
              {" "}
              <h2> Nosotros </h2>{" "}
            </li>
          </Link>
          <Link to="category">
          <li className="px-10 text-2xl">
            {" "}
            <h2> Categorías </h2>{" "}
          </li>
          </Link>
          <Link to="howshop">
            <li className="px-10 text-2xl">
              {" "}
              <h2> Cómo comprar </h2>{" "}
            </li>
          </Link>
          <Link to="contacto">
          <li className="px-10 text-2xl">
            {" "}
            <h2> Contacto </h2>{" "}
          </li>
          </Link>
        </ul>
      </nav>

      <CartWidget />
    </div>
  );
};

export default NavBar;
