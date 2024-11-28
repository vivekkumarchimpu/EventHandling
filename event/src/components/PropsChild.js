import React from 'react'

function PropsChild(props) {
    return (
        <>
            <h1>Child component</h1>
            <h3>{props.value}</h3>
        </>
    )
}

export default PropsChild