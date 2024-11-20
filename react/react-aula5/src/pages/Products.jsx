import { Link } from "react-router-dom";

const Products = () => {
    return ( 
        <>
            <h1>Products</h1>
            <ul>
                <li><Link to={"/product/1/Bunana"}>Bunana</Link></li>
                <li><Link to={"/product/2/Apple"}>Apple</Link></li>
                <li><Link to={"/product/3/Pineapple"}>Pineapple</Link></li>
                <li><Link to={"/product/4/Grace"}>Grace</Link></li>
                <li><Link to={"/product/5/Limon"}>Limon</Link></li>
            </ul>
        </>
     );
}
export default Products;