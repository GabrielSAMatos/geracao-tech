
import Banner from "./components/banner";
import FormaDeBolo from "./components/FormaDeBolo";
import Header from "./components/header";
import { Componente1, Componente2, Componente3 } from "./components/VariosComponentes";


const App = () => {
  return ( 
    <>
      {/* <Header />
      <Banner />
      <Componente1 />
      <Componente2 />
      <Componente3 /> */}
      <FormaDeBolo sabor="Luranja" cobertura="Chocolate" />
      <FormaDeBolo sabor="Cenoura" cobertura="Brigadeiro"/>
    </>
   );
}
 
export default App;