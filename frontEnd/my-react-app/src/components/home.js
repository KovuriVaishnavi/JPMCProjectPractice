import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Card from './card';
import Carousel from './carousel';
import { Link } from 'react-router-dom';

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

 

  return (
    <>
      <div>
        <Navbar />
        <Carousel />
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
      </div>
    </>
  );
}
