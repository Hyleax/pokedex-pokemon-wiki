import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = ({pokedexPic}) => {
  return (
    <nav className="navbar navbar-dark bg-dark border-bottom border-danger border-4 navbar-expand-lg p-2">
  <div className="container-fluid">
    <Link className="navbar-brand my-2" to={"/"}>
        <h1 className="display-4 fw-bold text-center text-danger">PokeDex
        <img className='img-fluid mx-3' src= {pokedexPic} alt="" style={{
          width : "100px"
        }}/>
        </h1>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active mx-2 fs-5 text-danger" to={"/"} aria-current="page" >Pokemon</Link>
        <Link className="nav-link mx-2  fs-5 text-danger" >Features</Link>
        <Link className="nav-link mx-2 fs-5 text-danger">Pricing</Link>
        <Link className="nav-link mx-2 fs-5 text-danger">Disabled</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar