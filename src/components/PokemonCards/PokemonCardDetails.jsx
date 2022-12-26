import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import TypeBadge from './TypeBadge'

const PokemonCardDetails = () => {
    const typeColorsArray =
    {
      normal : '#A8A77A',
      fire : '#EE8130',
      water : '#6390F0',
      electric : '#F7D02C',
      grass : '#7AC74C',
      ice : '#96D9D6',
      fighting : '#C22E28',
      poison : '#A33EA1',
      ground : '#E2BF65',
      flying : '#A98FF3',
      psychic : '#F95587',
      bug : '#A6B91A',
      rock : '#B6A136',
      ghost : '#735797',
      dragon : '#6F35FC',
      dark : '#705746',
      steel : '#B7B7CE',
      fairy : '#D685AD'
    }

    let {id} = useParams()
    let [fetchedData, setFetchedData] = useState([])
    let {name, height, weight, sprites, abilities, types} = fetchedData

    let abilityName = ""
    let abilityEls = abilities?.map((a, index) => {
        if (a.ability.name.includes("-")){
          abilityName = a.ability.name.replace("-", " ")
        }
        else {
          abilityName = a.ability.name
        }

        return (index === abilities.length - 1 ? abilityName : abilityName+", ")
      })

      let badgeCol = ""
      let typeName = ""
      let badgeEls = types?.map((t) => {
        for (let c in typeColorsArray){
            if (t.type.name === c){
                badgeCol = typeColorsArray[c]
                typeName = t.type.name
            }
        }
        return(
            <TypeBadge
                typeName = {typeName}
                color = {badgeCol}
            />
        )
      })

    


    let api = `https://pokeapi.co/api/v2/pokemon/${id}`

    useEffect(() => {
        (
            async function() {
                let data = await fetch(api).then(res => res.json())
                setFetchedData(data)
                console.log(data);
            }
        )()
    }, [api])
    
        return (
            <div className="container-lg mt-4">
                <div className="row text-light">
                    <div className="col-lg-5 col-12 border-danger border-end border-2">
                        <div className="d-flex flex-column justify-content-center p-4">
                            <img 
                                src= {sprites?.front_default} 
                                alt="" 
                                className="img-fluid" />
                            <div className="fs-1 text-center text-warning mb-3"  style={{textTransform: "Capitalize"}}>
                                {name}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="mx-4">
                            <p className='text-center display-5'>
                                <u>PokeDex data</u>
                            </p>
                            <div className="d-flex flex-column gap-4 mt-5 fs-1 text-danger">
                            <div>
                                <span className="text-light">National Dex ID: </span>
                                {id}
                            </div>
                            <div>
                                <span className="text-light">Height(m): </span>
                                {(height/10).toFixed(1)}
                            </div>
                            <div>
                                <span className="text-light">Weight(kg): </span>
                                {(weight/10).toFixed(1)}
                            </div>
                            <div
                                style={{textTransform: "Capitalize"}}
                            >
                                <span 
                                className="text-light">Abilities: </span>
                                {abilityEls}
                            </div>
                            <div className='d-flex gap-2'>
                                <span className="text-light">Type: </span>
                                {badgeEls}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
}

export default PokemonCardDetails