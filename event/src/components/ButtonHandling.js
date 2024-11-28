import React, { useState } from "react";
const ButtonHandling = () => {
    const [count, setCount] = useState(0);
    const clickHandle = () => {
        setCount(count => count + 1);
    }
return(
    <>
        <div className="mainbox">
            <h3>Button Handling Event</h3>
            <button className="btn1" onClick={clickHandle}>Click</button>
            <h1>{count}</h1>
        </div>
    </>
)
}
export default ButtonHandling;