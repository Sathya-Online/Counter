import { useEffect, useState } from "react";
import './Counter.css'

function CounterFunc(props){
    const initialCount = Number(props.count || "0");
    const [count, setCount] = useState(initialCount); //State management using useState hook;
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);

    useEffect(() => console.log("useEffect called"), [count])

    const myStyle = {
        color: "blue",
        fontSize: "20px",
    }

    return <>
                <h1 style={{color: "red", backgroundColor: "black", textAlign: "center"}}>Couter Application using Function based Component</h1>
                <h2 style={myStyle}>Count: {count}</h2>
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
            </>
}

export default CounterFunc;