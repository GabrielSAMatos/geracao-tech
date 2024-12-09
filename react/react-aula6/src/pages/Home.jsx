import { useEffect, useState } from "react"
import { API } from "../services";


const Home = () => {

    const [products, setProducts] = useState([]);

    async function searchProducts(){
        const request = await API.get('/products');        
        setProducts(request.data);
    }

    useEffect(() => {
        searchProducts();
    }, []);

    console.log(products);
    

  return (
    <>
        <section>
            <h1>Lista de Produtos</h1>
            <ul className="grid list-none p-0">
                {
                    products.map((product) => (
                        <li className="col-12 md:col-3">
                        <div className="shadow-4 p-3 border-round-md">
                        <div className="relative">
                            <img className="w-full" style={{height: '300px', objectFit: 'contain'}} src={product.image} alt={product.title} />
                            <h6 className="absolute top-0 right-0 py-1 px-2 border-round-md">{product.rating.rate}</h6>
                        </div>
                        <h3 className="mb-0 white-space-nowrap overflow-hidden text-overflow-ellipsis">{product.title}</h3>
                        <h6 className="mt-0 text-primary uppercase">{product.category}</h6>
                        <h2 className="mb-0">R$ {product.price}</h2>
                        </div>  
                    </li>
                    ))
                }
            </ul>
        </section>
    </>
  )
}

export default Home
