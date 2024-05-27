import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authentication'
import './adminnavbar.css'
export default function Adminnavbar() {
    const auth=useAuth()
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <h4 className='m-3'>RecipeRadar</h4>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/dashboard" style={{color:'black'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addRecipe" style={{color:'black'}}>Add Recipe</Link>
        </li>
        
        <li>
            <button className="nav-link btn logout-button" onClick={auth.logOut} >LogOut</button>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}
