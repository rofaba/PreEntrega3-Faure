import { Link } from "react-router-dom";

const Contact = () => {
    return (  
<div>
      <h1 className="text-center text-4xl"> CONTACTANOS</h1>
      <p className="text-center text-2xl"> Acá pronto encontrarás información sobre como contactarnos. Estamos para ayudarte
      </p>

      <Link to={"/"}>
        <h2 className="text-center text-xl bg-zinc-200" >Volver a HOME</h2>
      </Link>
    </div>




    );
}
 
export default Contact;