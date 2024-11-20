
import Banner from "./components/banner";
import Card from "./components/Card";
import CardDinamic from "./components/CardDinamic";
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
      <Componente3 /> 
      <FormaDeBolo sabor="Luranja" cobertura="Chocolate" />
      <FormaDeBolo sabor="Cenoura" cobertura="Brigadeiro"/>
      */}
      <Card
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlQ--gSk-iFXEuc1_gnb42evIyrkUdAytnw&s"}
        title={"Notice 1"}
        category={"Sports"}
        paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse quis fuga explicabo laborum totam aliquid, provident rerum, sequi cum laudantium, itaque atque amet ratione architecto. Placeat eaque impedit ex."}
        type={"A"}
      />
      <Card
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlQ--gSk-iFXEuc1_gnb42evIyrkUdAytnw&s"}
        title={"Notice 2"}
        category={"Finances"}
        paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse quis fuga explicabo laborum totam aliquid, provident rerum, sequi cum laudantium, itaque atque amet ratione architecto. Placeat eaque impedit ex."}
      />
      <Card
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlQ--gSk-iFXEuc1_gnb42evIyrkUdAytnw&s"}
        title={"Notice 3"}
        category={"Kitchen"}
        paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse quis fuga explicabo laborum totam aliquid, provident rerum, sequi cum laudantium, itaque atque amet ratione architecto. Placeat eaque impedit ex."}
      />

      <CardDinamic>
        <h1>Notice 4</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlQ--gSk-iFXEuc1_gnb42evIyrkUdAytnw&s" alt="" />
        <h6>Cats</h6>
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Accusantium esse quis fuga explicabo laborum totam aliquid, 
          provident rerum, sequi cum laudantium, itaque atque amet ratione architecto. 
          Placeat eaque impedit ex."
        </p>
      </CardDinamic>
    </>
  );
}
export default App;