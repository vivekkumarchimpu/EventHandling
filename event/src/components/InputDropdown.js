import React, { useState } from 'react'

function InputDropdown() {
    const stateName = ['Bihar',"Delhi","UP","MP","Haryana"];
    const [value, setValue] = useState("");
    const selectHandling = (e) => {
        setValue(e.target.value);
    }
    return (
        <>
            <div className='mainbox' style={{textAlign : 'center'}}>
                <select onChange={selectHandling} style={{backgroundColor : 'yellow', height : '30px', width : '200px', textAlign : 'center'}}>
                    <option value={''}>Select State Name</option>
                    {stateName.map((item) =>(
                        <option value={item}>{item}</option>
                    ))}                      
                </select>
                    <h2 style={{marginRight : '400px' }}>{value}</h2>
            </div>
        </>
    )
}

export default InputDropdown