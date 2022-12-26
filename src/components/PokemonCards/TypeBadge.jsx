import React from 'react'

const TypeBadge = ({typeName, color}) => {
    console.log(typeName);

    return (
        <div>
            <h1 
            style={
                {
                    backgroundColor : `${color}`
                }
            }
            className='badge'>{typeName.toUpperCase()}</h1>
        </div>
    )
}

export default TypeBadge