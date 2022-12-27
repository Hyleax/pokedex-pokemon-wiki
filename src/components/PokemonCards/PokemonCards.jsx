import React from 'react'
import { Link } from 'react-router-dom';
import pokemonTypeColors from '../pokemonTypeColors.js'

const PokemonCards = ({page, results, placeholderPic}) => {
  let displayCards;
  if (results){
  
    displayCards = results.map((pokemon) => {
      let {name, abilities, sprites, types, id} = pokemon
      let abilityName = ""
      let abilityEls = abilities.map((a, index) => {
        if (a.ability.name.includes("-")){
          abilityName = a.ability.name.replace("-", " ")
        }
        else {
          abilityName = a.ability.name
        }

        return (index === abilities.length - 1 ? abilityName : abilityName+", ")
      })

      let typeEls = types.map((t, index) => {
        return(index === types.length -1 ? t.type.name : t.type.name + ", ")
      })

      // get card color depending on pokemon type
      let bgColor = ""

      for (let c in pokemonTypeColors) {
        if (typeEls[0].includes(c)){
          bgColor = pokemonTypeColors[c]
        }
      }
     
      return(
        <Link 
          to={`${page}${id}`}
          key={id}
          style = {
            {
              backgroundColor : bgColor,
              textDecoration : "none",
              color : "black"
            }
          }
          className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 border border-3 border-dark">
         <div className="d-flex justify-content-center flex-column p-3">
          <div className="d-flex justify-content-between mb-2">
          <div 
            style={
              {
                  textTransform: "Capitalize",
              }
            }
            className="fw-bold fs-3 mx-2">{name}</div>
          <div className="fs-4 mt-1">No. <span className="fw-bold">{id}</span> </div>
          </div>
          <img 
            className='img-fluid border border-3 border-dark bg-light' 
            src= {sprites.front_default ? sprites.front_default : placeholderPic} 
            alt="No pokemonPic found"/>
          <div className="mt-2 fs-4"><span className="fw-bold">Type:</span> {typeEls}</div>
          <div className="mt-2 fs-4"> <span className="fw-bold">Abilties:</span> {abilityEls}</div>
         </div>
        </Link>
      )
    })
  }

  else {
    displayCards = "No Pokemon Found"
  }


  return (
    <>{displayCards}</>
  )
}

export default PokemonCards