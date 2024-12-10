import React from 'react'
import PropsArrayChild from './PropsArrayChild'

function PropsArray() {
    const car = [
        {id: 1, brand:'BMW'},
        {id: 2, brand:'AUDI'},
        {id: 3, brand:'CRETA'},
        {id: 4, brand:'MAHENDRA'}
    ]
    return (
        <div className='mainbox'>
            <ul>
                {
                    car.map((car) => <PropsArrayChild key={car.id} brand={car.brand} />)
                }
            </ul>
        </div>
    )
}

export default PropsArray