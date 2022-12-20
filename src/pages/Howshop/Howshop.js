import { Link } from "react-router-dom";

const Howshop = () => {
    return ( 

    <div>
      <h1 className="text-center text-4xl p-4"> COMO COMPRAR</h1>
      <p className="text-center text-2xl p-4"> Pronto encontrarás información sobre cómo comprar en esta sección</p>

      <Link to={"/"}>
      <div className="flex justify-center mb-4">
          <button className="text-center text-xl bg-zinc-200 p-4 rounded-xl hover:text-xl hover:bg-slate-300  " >Volver a HOME</button>
      </div>
      </Link>
    </div>


     );
}
 
export default Howshop;