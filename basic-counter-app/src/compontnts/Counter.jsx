import { useEffect, useState } from "react";
import styles from "./Counter.module.css"

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
         const interval = setInterval(() => {
            setCount(state => state + 1)
        }, 1000) 
        return () => clearInterval(interval); 
    }, [])
     
    
    const incrementHandler = () => {
        if (count < 10) {
            setCount(state => state + 1);
        }        
    }

    const decrementHandler = () => {
        if (count > 0) {
            setCount(state => state - 1);
        }        
    }

    return (
    <div className={styles["counter-container"]}>
        <button onClick={incrementHandler}>+</button>
        <div>{count}</div>
        <button onClick={decrementHandler}>-</button>      
    </div>
    )
}

export default Counter;