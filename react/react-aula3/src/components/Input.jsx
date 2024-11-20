import { useRef, useState } from "react";

const Input = () => {

    const [name, setName] = useState("");
    //const name = useRef("");
    return ( 
        <>
            <input 
                type="text"  
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                //ref={name}
            />

            <button>Mostrar</button>
            <h1>{name}</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Ratione vero repellendus numquam laudantium? Fugiat voluptatem saepe 
                ab reprehenderit unde dolor esse amet. Cum et velit commodi 
                nobis numquam aliquam facilis.</p>
        </>
     );
}
 
export default Input;