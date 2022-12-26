import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import PokemonCards from "./components/PokemonCards/PokemonCards";
import { useState, useEffect } from "react";
import Pagination from "./components/Pagination/Pagination";
import placeholderPic from "./images/sandslash-silhouette-png.png"

function App() {

  // state variables
  let [fetchedData, setFetchedData] = useState([])
  let [pageOffset, setPageOffset] = useState(0)

  // API
  let api = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${pageOffset}`
  
  // useEffect to get initial API
  useEffect(() => {
    (
      async function() {
        let data = await fetch(api).then(res => res.json())

        // map over the results and store all the URL's inside an array
        let pokemonURLs = data.results.map((r) => {
          return (r.url)
        })

        // using Promise.all to fetched all data from api's and store them in array
        let allPokemon = await Promise.all(
          pokemonURLs.map((x) => {
            return fetch(x).then(res => res.json())
          })
        )

        setFetchedData(allPokemon)
      }
    )()
  }, [api])

  // useEffect(() => {
  //   (
  //     async function() {
  //       let data = await fetch(searchAPI).then(res => res.json())
  //       console.log(data);      
  //       setFetchedData([data])
  //     }
  //   )()
  // }, [searchAPI])

  return (
    <div className="App">
        <h1 className="display-4 fw-bold text-center text-danger m-4">PokeDex</h1>
  
        <Pagination
            setPageOffset = {setPageOffset}
            />

          <div className="container">
            <div className="row">
            <PokemonCards
                results = {fetchedData}
                placeholderPic = {placeholderPic}
            />
            </div>
          </div>

    </div>
  );
}

export default App;
