import React from 'react'


const PokemonCards = ({results, placeholderPic}) => {
  let displayCards;
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

  if (results){
  
    displayCards = results.map((pokemon) => {
      let {name, order, abilities, sprites, types, id} = pokemon
     
      let abilityEls = abilities.map((a, index) => {
        return (index === abilities.length - 1 ? a.ability.name : a.ability.name+", ")
      })

      let typeEls = types.map((t, index) => {
        return(index === types.length -1 ? t.type.name : t.type.name + ", ")
      })

      // get card color depending on pokemon type
      let bgColor = ""

      for (let c in typeColorsArray) {
        if (typeEls[0].includes(c)){
          bgColor = typeColorsArray[c]
        }
      }
     
      return(
        <div 
          key={id}
          style = {{backgroundColor : bgColor}}
          className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 border border-3 border-dark">
         <div className="d-flex justify-content-center flex-column p-3">
          <div className="d-flex justify-content-between mb-2">
          <div 
            style={
              {
                  textTransform: "Capitalize",
              }
            }
            className="fw-bold fs-3">{name}</div>
          <div className="fs-4 mt-1">No. <span className="fw-bold">{order}</span> </div>
          </div>
          <img 
            className='img-fluid border border-3 border-dark bg-light' 
            src= {sprites.front_default ? sprites.front_default : placeholderPic} 
            alt="No pokemonPic found"/>
          <div className="mt-2 fs-4"><span className="fw-bold">Type:</span> {typeEls}</div>
          <div className="mt-2 fs-4"> <span className="fw-bold">Abilties:</span> {abilityEls}</div>
         </div>
        </div>
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