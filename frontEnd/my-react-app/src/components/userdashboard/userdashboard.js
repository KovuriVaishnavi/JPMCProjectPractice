import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppDownload from '../AppDownload/AppDownload';
import Carousel from '../Carousel/carousel';
import Footer from '../Footer/Footer';
import RecipeCard from '../RecipeCard/RecipeCard';
import Usernavbar from '../usernavbar/usernavbar';

export default function Userdashboard() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <>
      <Usernavbar />
      <Carousel />
      <div className="container mt-4 userdashboard" id="userdashboard">
        <h2 className="text-center mb-4">FOR YOU</h2>
        <div className="d-flex flex-wrap justify-content-around">
          {recipes.map((recipe, index) => (
            <Link key={index} className="nav-link" to={`/recipe/${recipe._id}`}>
              <div className="grid-item mb-3" style={{ width: "236px", height: "375px" }}>
                <RecipeCard recipename={recipe.name} description={`Let's make amazing ${recipe.name}`} />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <AppDownload />
      <Footer />
    </>
  );
}
