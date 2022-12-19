import React from "react";
import { Link } from "react-router-dom";

const Nosotros = () => {
  return (
    <div>
      <h1 className="text-center text-4xl"> QUIENES SOMOS</h1>
      <p className="text-center text-2xl"> Pronto podrás ver acá ver quiénes somos y qué hacemos.</p>

      <Link to={"/"}>
        <h2 className="text-center text-xl bg-zinc-200" >Volver a HOME</h2>
      </Link>
    </div>
  );
};

export default Nosotros;
