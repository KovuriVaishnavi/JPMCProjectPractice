import React, { useState } from "react";
import './UserPreference.css';

function UserPreferences() {
  const initialRecipes = [
    { name: "Italian", picture: "https://x.yummlystatic.com/web/bubble/cuisine/italian.png" },
    { name: "American", picture: "https://x.yummlystatic.com/web/bubble/cuisine/american.png" },
    { name: "Asian", picture: "https://x.yummlystatic.com/web/bubble/cuisine/asian.png" },
    { name: "Chinese", picture: "https://x.yummlystatic.com/web/bubble/cuisine/chinese.png" },
    { name: "Japanese", picture: "https://x.yummlystatic.com/web/bubble/cuisine/japanese.png" },
    { name: "Indian", picture: "https://x.yummlystatic.com/web/bubble/cuisine/indian.png" },
    { name: "Mexican", picture: "https://x.yummlystatic.com/web/bubble/cuisine/mexican.png" },
    { name: "South Western", picture: "https://x.yummlystatic.com/web/bubble/cuisine/southwestern.png" }
  ];

  const initialDietaryPreferences = [
    { name: "Vegan", picture: "https://www.cureveda.com/cdn/shop/files/Logo_New_1_e207fc7c-b49b-45aa-a1c8-3bd2b106865d.png?v=1707588211&width=352" },
    { name: "Non-Vegetarian", picture: "https://media.istockphoto.com/id/1742997187/vector/whole-roasted-chicken-on-plate-grilled-chicken-in-plate-non-veg-food-non-vegetarian-dish.jpg?s=612x612&w=0&k=20&c=3ioolOYDg528vaa0He_BCUKIY7tPB7enUlT_mIlYxEc=" },
    { name: "Pescetarian", picture: "https://cdn.iconscout.com/icon/premium/png-256-thumb/pescatarian-5434092-4535857.png"},
    { name: "Gluten-Free", picture: "https://i.pinimg.com/originals/f3/fa/4b/f3fa4bae27c7c632e5ed07aca5209694.png" },
    { name: "Dairy-Free", picture: "https://banner2.cleanpng.com/20180812/wqv/kisspng-brand-product-design-logo-t-shirt-font-dairy-free-icon-related-keywords-amp-suggestions-5b6ffacc25b333.0249816015340653561544.jpg" },
    { name: "Nut-Free", picture: "https://www.shutterstock.com/image-vector/nut-free-icon-vector-illustration-260nw-720088726.jpg" },
    { name: "Diabetes", picture: "https://www.shutterstock.com/image-vector/vector-circle-icon-emblem-linear-600nw-2026752749.jpg" }
  ];

  const [dietaryPreferences, setDietaryPreferences] = useState(initialDietaryPreferences);
  const [recipes, setRecipes] = useState(initialRecipes);
  const [showDietOptions, setShowDietOptions] = useState(false);
  const [showCuisineOptions, setShowCuisineOptions] = useState(false);
  const [selectedDiets, setSelectedDiets] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  function handleSelect(index, type) {
    if (type === 'diet') {
      const selected = dietaryPreferences[index];
      setSelectedDiets([...selectedDiets, selected]);
      setDietaryPreferences(dietaryPreferences.filter((_, i) => i !== index));
    } else if (type === 'cuisine') {
      const selected = recipes[index];
      setSelectedCuisines([...selectedCuisines, selected]);
      setRecipes(recipes.filter((_, i) => i !== index));
    }
  }

  function handleRemove(index, type) {
    if (type === 'diet') {
      const removed = selectedDiets[index];
      setDietaryPreferences([...dietaryPreferences, removed]);
      setSelectedDiets(selectedDiets.filter((_, i) => i !== index));
    } else if (type === 'cuisine') {
      const removed = selectedCuisines[index];
      setRecipes([...recipes, removed]);
      setSelectedCuisines(selectedCuisines.filter((_, i) => i !== index));
    }
  }

  return (
    <div className="preferences-container">
     <div className="place">
      <img className="image" src="https://img.freepik.com/premium-vector/diagonal-cross-line-grid-square-seamless-pattern_80590-13921.jpg" />
      <div className="plus">
      <i className="fa fa-plus" aria-hidden="true" onClick={() => setShowDietOptions(!showDietOptions)}></i>
        <div className="text1" onClick={() => setShowDietOptions(!showDietOptions)}>Add Diet</div>
      </div>
     </div>
      <div className="selected-items">
        {selectedDiets.map((diet, index) => (
            <div className="selected-item-content">
          <div key={index} className="selected-item">
            <img className="selected-image" src={diet.picture} alt={diet.name} />
            <i className="fa fa-trash-alt delete-icon" onClick={() => handleRemove(index, 'diet')}></i>
            <div className="overlay"></div>
              <div className="preference-name">
                {diet.name}
              </div>
          </div>
          </div>
        ))}
      </div>
      {showDietOptions && (
        <div className="image-grid">
          {dietaryPreferences.map((preference, index) => (
            <div
              key={preference.name}
              className="grid-item diet"
              onClick={() => handleSelect(index, 'diet')}
            >
              <img
                className="preference-image"
                src={preference.picture}
                alt={preference.name}
              />
              <div className="overlay"></div>
              <div className="preference-name">
                {preference.name}
              </div>
            </div>
          ))}
        </div>
      )}

     <div className="place">
      <img className="image" src="https://img.freepik.com/premium-vector/diagonal-cross-line-grid-square-seamless-pattern_80590-13921.jpg" alt="white bg"/>
      <div className="plus">
       <i className="fa fa-plus" aria-hidden="true" onClick={() => setShowCuisineOptions(!showCuisineOptions)}></i>
        <div className="text1" onClick={() => setShowCuisineOptions(!showCuisineOptions)}>Add Cuisine</div>
      </div>
     </div>
      <div className="selected-items">
        {selectedCuisines.map((cuisine, index) => (
            <div className="selected-item-content">
          <div key={index} className="selected-item">
            <img className="selected-image" src={cuisine.picture} alt={cuisine.name} />
            <i className="fa fa-trash-alt remove-icon" onClick={() => handleRemove(index, 'cuisine')}></i>
            <div className="overlay"></div>
              <div className="recipe-name">
                {cuisine.name}
              </div>
            </div>
            </div>
        ))}
      </div>
      {showCuisineOptions && (
        <div className="image-grid">
          {recipes.map((recipe, index) => (
            <div key={recipe.name} className="grid-item cuisine" onClick={() => handleSelect(index, 'cuisine')}>
              <img className="recipe-image" src={recipe.picture} alt={recipe.name}/>
              <div className="overlay"></div>
              <div className="recipe-name">
                {recipe.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserPreferences; 