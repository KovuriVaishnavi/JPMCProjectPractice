import React from 'react'
import Navbar from './navbar'
import Card from './card'
import Carousel from './carousel'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3001/api/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);
  console.log(recipes)
  return (
    <>
      <div >
        <div> <Navbar></Navbar></div>
        <div><Carousel></Carousel></div>
        <div>

          <div className="d-flex flex-wrap justify-content-around">
            {recipes.map((recipe,index) => (
              <Link key={index} className="nav-link" to={`/recipe/${recipe._id}`}>
              <div  className="grid-item mb-3" style={{ width: "236px", height: "375px" }}>
                <Card recipename={recipe.name} description={`lets make amazing ${recipe.name}`}></Card>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    
    </>
  )
}
