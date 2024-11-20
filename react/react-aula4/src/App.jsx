import { useEffect, useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);


  function welcome(){
    alert("Welcome!")
  }


  useEffect(() => {
    console.log("useEffect chamado");
  });

  useEffect(() => {
    welcome()
    console.log("useEffect chamado apenas uma vez");
  }, []);

  useEffect(() => {
    console.log(`useEffect ativado somente por dependencia`);
  }, [count2])

  return (
    <>
      <h1>aoba</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ex temporibus,
        exercitationem omnis dicta doloribus ipsa maiores minima magnam est modi numquam 
        architecto illo et vitae hic minus odit eaque.
      </p>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click here</button>
      <h2>Count: {count2}</h2>
      <button onClick={() => setCount2(count2 + 1)}>Click here</button>
    </>
  );
}

export default App;