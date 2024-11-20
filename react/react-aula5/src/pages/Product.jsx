import { useParams } from "react-router-dom";

const Product = () => {

    const { id, name } = useParams();


    return ( 
        <>
            <h1>Produto #{id} {name}</h1>
        </>
     );
}
 
export default Product;
