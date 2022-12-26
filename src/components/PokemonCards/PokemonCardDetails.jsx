import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import TypeBadge from './TypeBadge'
import PokemonStats from './PokemonStats'

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
    let {name, height, weight, sprites, abilities, types, stats} = fetchedData


    console.log(stats);

    // mapping abilities
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

    // mapping pokemon types
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
                key={typeName}
                typeName = {typeName}
                color = {badgeCol}
            />
        )
    })

    // mapping pokemon stats
    let statEls = stats?.map((s) => {
        let replacedStatName = ""
        if (s.stat.name === 'special-attack'){
            replacedStatName = "Sp. Atk"
        }
        else if (s.stat.name === 'special-defense') {
            replacedStatName = "Sp. Def"
        }
        else {
            replacedStatName = s.stat.name
        }
        return(
            <PokemonStats
            statName = {replacedStatName}
            statValue = {s.base_stat}    
        />
        )
        
    })
    


    let api = `https://pokeapi.co/api/v2/pokemon/${id}`

    useEffect(() => {
        (
            async function() {
                let data = await fetch(api).then(res => res.json())
                setFetchedData(data)
            }
        )()
    }, [api])
    
        return (
            <div className="container-lg mt-5 text-light">
                <div className="row">
                    <div className="col-lg-4 col-12 border-danger border-end border-2">
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
                    <div className="col-lg-8 col-12">
                        <div className="mx-4">
                            <p className='text-center display-5'>
                                <u>PokeDex data</u>
                            </p>
                            <div className="d-flex flex-column gap-4 mt-5 fs-1 text-danger">
                            <div>
                                <span className="text-light">National Dex ID: </span>
                                No. {id}
                            </div>
                            <div>
                                <span className="text-light">Height: </span>
                                {(height/10).toFixed(1)} m
                            </div>
                            <div>
                                <span className="text-light">Weight: </span>
                                {(weight/10).toFixed(1)} kg
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

                <div className="row">
                    <div className="mt-5">
                        <p className='text-center display-5 mb-4'>
                            <u>Base stats</u>
                        </p>

                        <div className="container-sm mb-4">
                            {statEls}
                        </div>
                    </div>
                </div>
            </div>    
        )
}

export default PokemonCardDetails