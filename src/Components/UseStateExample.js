import { useState } from "react";

function UseStateExample()
{
    //const [count,setCount] = useState(0)

    const [count,setCount] = useState(0)

    const Increment = () =>
    {
        setCount(count + 1)
    }

    const Decrement =() =>
    {

        setCount(count -  1)
    }
    return(
        <div>
            <p>Count:{count}</p>
            {/* <button onClick={() => setCount(1)}>ClickME</button> */}

            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Increment</button>



        </div>
    )
}

export default UseStateExample;