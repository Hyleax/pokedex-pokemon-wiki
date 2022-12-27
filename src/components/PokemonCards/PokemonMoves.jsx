import React ,{useState, useEffect} from 'react'
import TypeBadge from './TypeBadge'
import pokemonTypeColors from '../pokemonTypeColors.js'

const PokemonMoves = ({moves}) => {
    const [pokemonMoves, setPokemonMoves] =  useState([])
    let pokemonMovesEl = pokemonMoves.map((move) => {
        // Destructuring the move
        let {name, type, id, damage_class, power, accuracy} = move
        let moveName = ""
        if (name.includes("-")) {
            moveName = name.replace("-", " ")
        }
        else {
            moveName = name
        }

        let color = ""

        for (let c in pokemonTypeColors) {
            if (type.name === c) {
                color = pokemonTypeColors[c]
            }
        }

        return (
            <tr key={id}
                className = "text-light text-center"
            >
                <th scope='row' style={{textTransform : "capitalize"}}>{moveName}</th>
                <td> <TypeBadge typeName={type.name} color = {color}/> </td>
                <td>{damage_class.name}</td>
                <td>{power ? power : "--"}</td>
                <td>{accuracy ? accuracy : "--"}</td>
            </tr>
        )
    })

    useEffect(() => {
        (async function() {
            let allMoveURLs = moves.map((m) => {
                return (m.move.url)
            })

            let allMoves = await Promise.all(
                allMoveURLs.map((m) => {
                    return fetch(m).then(res => res.json())
                })
                )

            setPokemonMoves(allMoves)
        })()
    }, [moves])
    return (
        <div className = "row d-flex justify-content-center">
            <table className="table text-light" style={{maxWidth : "1000px"}}>
                <thead>
                    <tr className='text-warning text-center'>
                    <th scope="col">Move</th>
                    <th scope="col">Type</th>
                    <th scope="col">Cat.</th>
                    <th scope="col">Power</th>
                    <th scope="col">Acc.</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemonMovesEl}
                </tbody>
            </table>
        </div>
    )
}

export default PokemonMoves