import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <>
            <h3>Pagina nao encontrada</h3>
            <Link to={"/"}>Voltar</Link>
        </>
     );
}
 
export default NotFound;