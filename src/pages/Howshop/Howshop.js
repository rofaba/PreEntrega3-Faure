import { Link } from "react-router-dom";

const Howshop = () => {
    return ( 

    <div>
      <h1 className="text-center text-4xl"> COMO COMPRAR</h1>
      <p className="text-center text-2xl"> Pronto encontrarás información sobre cómo comprar en esta sección</p>

      <Link to={"/"}>
        <h2 className="text-center text-xl bg-zinc-200" >Volver a HOME</h2>
      </Link>
    </div>


     );
}
 
export default Howshop;