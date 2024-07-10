import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppDownload from '../AppDownload/AppDownload';
import Carousel from '../Carousel/carousel';
import Footer from '../Footer/Footer';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import RecipeCard from '../RecipeCard/RecipeCard';

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/recipes')
      .then(response => response.json())
      .then((data) => {
        setRecipes(data)
        console.log(data);
      })
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

 

  return (
    <>
      <div>
      <HomeNavbar/>
      <Carousel />
      <div className="container mt-4 userdashboard" id="userdashboard">
        <h2 className="text-center mb-4">ALL RECIPES</h2>
        <div className="d-flex flex-wrap justify-content-around">
          {recipes.map((recipe, index) => (
            <Link key={index} className="nav-link" to={`login`}>
              <div className="grid-item mb-3" style={{ width: "236px", height: "375px" ,borderRadius:'0'}}>
              <RecipeCard recipename={recipe.name} description={`Let's make amazing ${recipe.name}`} averageRating={recipe.averageRating} image={recipe.image}/>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <AppDownload />
      <Footer />
      </div>
    </>
  );
}
