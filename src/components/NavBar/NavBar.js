import React from "react";
import { Routes, Route } from "react-router-dom";
import logo from "../../assets/img/logo.jpeg";
import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./NavBar.css";
import { Link } from 'react-router-dom'

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
