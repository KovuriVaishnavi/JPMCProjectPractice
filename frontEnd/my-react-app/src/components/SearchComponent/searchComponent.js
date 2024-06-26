import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';

export default function SearchResults() {
  const { name } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/recipes/search/name/${name}`);

        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [recipes]);

  return (

    <div className="container mt-4">
      <h2 className="text-center mb-4">Searched Items</h2>
      <div className="d-flex flex-wrap justify-content-around">
        {recipes.length === 0 ? (
          <p>No results found for "{name}".</p>
        ) : (
          recipes.map((recipe, index) => (
            <Link key={index} className="nav-link" to={`/recipe/${recipe._id}`}>
              <div className="grid-item mb-3" style={{ width: "236px", height: "375px" }}>
                <RecipeCard recipename={recipe.name} description={`Let's make amazing ${recipe.name}`} />
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
