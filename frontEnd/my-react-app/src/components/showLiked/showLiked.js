import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import '../showFavorites/showFavorite.css'
export default function ShowLiked() {
  const [recipes, setRecipes] = useState([]);
  const [LikedRecipeIds, setLikedRecipeIds] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.likes) {
      setLikedRecipeIds(user.likes);
    }
  }, []);

  useEffect(() => {
    if (LikedRecipeIds.length > 0) {
      const fetchRecipes = async () => {
        try {
          const recipePromises = LikedRecipeIds.map(id =>
            axios.get(`http://localhost:3001/api/recipes/search/id/${id}`)
          );
          const recipeResponses = await Promise.all(recipePromises);
          const fetchedRecipes = recipeResponses.map(response => response.data);
          setRecipes(fetchedRecipes);
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      };
      fetchRecipes();
    }
  }, [LikedRecipeIds]);

  return (
    <div className="favorites-container mt-4">
    <h2 className="favorites-heading">YOU LIKED</h2>
    <div className="recipe-grid">
      {recipes.map((recipe, index) => (
        <Link key={index} className="nav-link" to={`/recipe/${recipe._id}`}>
          <div className="grid">
            <RecipeCard recipename={recipe.name} description={`Let's make amazing ${recipe.name}`} averageRating={recipe.averageRating} image={recipe.image} />
          </div>
        </Link>
      ))}
    </div>
  </div>
  );
}