import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import PageLayout from "../layout/PageLayout";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />}/>
                        <Route path="/products" element={<Products />} />
                        <Route path="/product/:id/:name" element={<Product />}/>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>

        </>
     );
}
 
export default Paths;