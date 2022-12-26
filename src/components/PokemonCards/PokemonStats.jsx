import React from 'react'

const PokemonStats = ({statName, statValue}) => {
    let maxWidth = 190
    let width = statValue / maxWidth * 100
    let progressColor = ''
    if (statValue < 50){
        progressColor = "orange"
    }
    else if (statValue >= 50 && statValue < 100){
        progressColor = "yellow"
    }
    else {
        progressColor = "green"
    }

    return (
            <div className="d-flex justify-content-center align-items-center">
                <div 
                    style={{textTransform: "capitalize"}}
                    className="col-lg-2 col-2 fs-2 text-end">{statName}</div>
                <div className="col-lg-2 col-2 fs-2 text-center text-danger">{statValue}</div>
                <div 
                    style = {{height : "24px"}}
                    className="progress col-lg-5 col-6">
                    <div 
                        style = 
                        {
                            {
                                width : `${width}%`,
                                backgroundColor: `${progressColor}`
                            }
                        } 
                        className="progress-bar" 
                        role="progressbar" 
                        aria-label="Basic example" 
                        aria-valuenow= {width}
                        aria-valuemin="0" 
                        aria-valuemax="100"></div>
                </div>
            </div>
    )
}

export default PokemonStats