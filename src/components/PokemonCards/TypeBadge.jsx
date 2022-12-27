import React from 'react'

const TypeBadge = ({typeName, color}) => {
    return (
        <div>
            <h1 
            style={
                {
                    backgroundColor : `${color}`,
                    minWidth : "70px",
                    minHeight : "22px "
                }
            }
            className='badge'>{typeName.toUpperCase()}</h1>
        </div>
    )
}

export default TypeBadge