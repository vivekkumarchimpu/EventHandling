import React, { useEffect, useState } from 'react'

function InputRadiobutton() {
    const country = ['India', 'Pakistan', 'USA', 'UK', 'Nepal', 'Bhutan'];
    const india = ['Bihar', 'Haryana', 'Udisa', 'Uttar Pradesh', 'Punjab', 'Gujrat'];
    const usa = ["Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut"];
    const pakistan = ['Lahor', 'Islamabad', 'Baluchistan', 'Multan', 'Sindh'];
    const uk = ['England', 'Scotland', 'Wales', 'Northern Ireland'];
    const nepal = ['Gandaki', 'Pokhara', 'Lumbini', 'Deukhuri'];
    const bhutan = ['Chhukha', 'Sarpang', 'Trongsa', 'Zhemgang', 'Bumthang'];
    const [value, setValue] = useState("");
    const [stateValue, setStateValue] = useState("");
    const [flag, setFlag] = useState(true);
    const inputHandling = (e) => {
        setValue(e.target.value);
        setFlag(false);
    }
    const stateHandling = (e) => {
        setStateValue(e.target.value);
    }
    useEffect(() => {
    }, [value])
    useEffect(()=>{
        setFlag(true);
    },[stateValue])
    return (
        <>
            <div className='mainbox'>
                {country.map((item) => (
                    <label><input type='radio' value={item} checked={value === item} onChange={inputHandling}></input>{item}</label>
                ))
                }
                 <h2>States of {value}</h2>
                {
                    value === 'India' && <select onChange={stateHandling}>
                        <option value=''>States Name</option>
                        {india.map((item) => (
                            <option value={item} >{item}</option>
                        ))
                        }
                    </select>
                }
                {
                    value === 'USA' && <select onChange={stateHandling}>
                        <option value=''>States Name</option>
                        {usa.map((item) => (
                            <option value={item}>{item}</option>
                        ))
                        }
                    </select>
                }
                {
                    value === 'UK' && <select onChange={stateHandling}>
                        <option value=''>States Name</option>
                        {uk.map((item) => (
                            <option>{item}</option>
                        ))
                        }
                    </select>
                }
                {
                    value === 'Nepal' && <select onChange={stateHandling}>
                        <option value=''>States Name</option>
                        {nepal.map((item) => (
                            <option>{item}</option>
                        ))
                        }
                    </select>
                }
                {
                    value === 'Bhutan' && <select onChange={stateHandling}>
                        <option value=''>States Name</option>
                        {bhutan.map((item) => (
                            <option>{item}</option>
                        ))
                        }
                    </select>
                }
                {
                    value === 'Pakistan' && <select onChange={stateHandling}>
                        <option value=''>States Name</option>
                        {pakistan.map((item) => (
                            <option>{item}</option>
                        ))
                        }
                    </select>
                }
                {
                    flag && <h2>{stateValue}</h2>

                }
            </div>
        </>
    )
}

export default InputRadiobutton