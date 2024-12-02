import React, { useEffect, useState } from 'react'

function InputCheckbox() {
    const [value, setValue] = useState("");
    const clickHandling = (e) => {
        setValue(e.target.value);
    }
    // useEffect(() => {
    //     console.log(value);
    // },[value])
    return (
        <>
            <div className='mainbox'>
                <h2>InputCheckbox</h2>
                <ul>
                    <li><input type='checkbox' name='first' value={"first"} onClick={clickHandling} /><span>Select first</span></li>
                    <li><input type='checkbox' name='second' value={"second"} onClick={clickHandling} /><span>Select second</span></li>
                    <li><input type='checkbox' name='third' value={"third"} onClick={clickHandling} /><span>Select third</span></li>
                    <li><input type='checkbox' name='fourth' value={"fourth"} onClick={clickHandling}/><span>Select fourth</span></li>
                </ul>
                <h1>{value}</h1>

            </div>

        </>
    )
}

export default InputCheckbox