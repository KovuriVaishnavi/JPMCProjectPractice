import React from 'react'
import Adminnavbar from './adminnavbar'
import Carousel from './carousel'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './card';
export default function Admindashboard() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);
  return (
    <>
      <Adminnavbar></Adminnavbar>
      <Carousel></Carousel>
      <div className="container mt-4">
        <h2 className="text-center mb-4">FOR YOU</h2>
        <div className="d-flex flex-wrap justify-content-around">
          {recipes.map((recipe, index) => (
            <Link key={index} className="nav-link" to={`/recipe/${recipe._id}`}>
              <div className="grid-item mb-3" style={{ width: "236px", height: "375px" }}>
                <Card recipename={recipe.name} description={`Let's make amazing ${recipe.name}`} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    
    
    </>
  )
}
