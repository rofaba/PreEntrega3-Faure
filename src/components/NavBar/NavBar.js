import React from "react";
import logo from "../../assets/img/logo.jpeg";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
import data from "../../pages/Categories/data.json";


const NavBar = () => {
  return (
    <div className="flex justify center pl-48 h-40">
      <nav className="flex flex-row items-center">
        <Link to="/">
          <div className="flex items-center">
            <img
            style={{ width: "160px", height: "160px" }}
            alt="imagen de logo"
            src={logo}
          ></img>
          <p className="text-4xl italic">TIENDA IMAGES</p>
          </div>
          
        </Link>
         
     
        <ul className=" flex items-center" style={{ margin: "30px" }}>
          <Link to="nosotros">
            <li className="mx-10 text-2xl px-2 py-2 hover:bg-slate-100 rounded-lg ">
              {" "}
              <h2> Nosotros </h2>{" "}
            </li>
          </Link>
<div>
   <button className="peer px-2 py-2 hover:bg-slate-100 text-2xl rounded-lg relative"          
          >
            {" "}
            Categorias{" "}
          </button>
          <div className="categorias absolute hidden peer-hover:flex hover:flex w-[130px] flex-col items-start bg-white drop-shadow-lg rounded-b-lg">

            {data.map((category) => (
              <Link
                className="px-5 py-3 py-1 text-sm hover:text-lg hover:bg-slate-100 rounded-lg"
                key={category.id}
                to={`/category/${category.id}`}
              >
                {category.name}
              </Link>
            ))} 
</div>
        
          </div>

          <li></li>

          <Link to="howshop">
            <li className="mx-10 text-2xl peer px-2 py-2 hover:bg-slate-100 rounded-lg ">
              {" "}
              <h2> Cómo comprar </h2>{" "}
            </li>
          </Link>
          <Link to="contacto">
            <li className="mx-10 text-2xl py-2 hover:bg-slate-100 rounded-lg ">
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
