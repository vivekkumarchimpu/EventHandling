import React, { useEffect, useState } from 'react'

function FormSubmit() {
    const [inputData, setInputData] = useState({
        name: "",
        fname: "",
        age: "",
        gender: ""
    })
    const submitHandling = (e) => {
        console.log(inputData);
        e.preventDefault();
    }
    return (
        <>
            <div className='mainbox' >
                <form onSubmit={submitHandling}>
                    <label style={{paddingRight: '100px'}}>Name :</label>
                    <input type='text' onChange={(e) => {
                        setInputData(previousState => {
                            return { ...previousState, name: e.target.value }
                        })
                    }}></input>

                    <br />

                    <label style={{paddingRight: '40px'}}>Father's Name :</label>
                    <input type='text' onChange={(e) => {
                        setInputData(previousState => {
                            return { ...previousState, fname: e.target.value }
                        })
                    }}></input>
                    
                    <br />

                    <label style={{paddingRight: '113px'}}>Age :</label>
                    <select onChange={(e) => {
                        setInputData(previousState => {
                            return { ...previousState, age: e.target.value }
                        })
                    }} >
                        <option value=''>Select Your Age</option>
                        <option value='18'>18</option>
                        <option value='19'>19</option>
                        <option value='20'>20</option>
                        <option value='21'>21</option>
                        <option value='22'>22</option>
                        <option value='23'>23</option>
                        <option value='24'>24</option>
                        <option value='25'>25</option>
                    </select>
                    
                    <br />

                    <label style={{paddingLeft: '140px'}}><input type='radio' value='male'
                        checked={inputData.gender === 'male'}
                        onClick={(e) => {
                            setInputData(previousState => {
                                return { ...previousState, gender: e.target.value }
                            })
                        }} ></input>Male</label>
                    <label><input type='radio' value='female' 
                    checked={inputData.gender === 'female'} 
                    onClick={(e) => {
                        setInputData(previousState => {
                            return {...previousState, gender: e.target.value}
                        })
                         }}></input>Female</label>
                         
                         <br />
                    <span style={{paddingLeft: '330px'}}></span>
                    <input style={{padding: '6px'}} type='submit'></input>
                </form>
            </div>
        </>
    )
}

export default FormSubmit