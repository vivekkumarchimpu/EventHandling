import React, { useState } from 'react'
import PropsChild from './PropsChild';

function PropsHandling() {
    const [count, setCount] = useState(0);
    const clickHandle = () => {
        setCount(count => count + 1)
    }
    return (
        <>
            <div className='mainbox'>
                <button onClick={clickHandle}>Click</button>
                <PropsChild value={count} />
            </div>

        </>
    )
}

export default PropsHandling;