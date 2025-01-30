import React, { useState, useEffect } from 'react';
import '../styles/FilterPanel.css';

function FilterPanel() {
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedDiet, setSelectedDiet] = useState('');  // State to track the selected diet

  // Get request to fetch recipes
  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error("Error fetching recipes", error);
      });
  }, []);

  // Handle filter change for ingredients
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Handle diet change
  const handleDietChange = (event) => {
    setSelectedDiet(event.target.value);  // Update the selected diet state
  };

  // Filter recipes based on ingredients
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesDiet = selectedDiet ? recipe.diet === selectedDiet : true; // If a diet is selected, filter by it

    return (
      matchesDiet &&
      recipe.ingredients &&
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(filter.toLowerCase()) // Check if any ingredient matches the filter
      )
    );
  });

  return (
    <div className='filter-panel'>
      <h1>Filter Recipes</h1>

      

      {/* Diet dropdown */}
      <select value={selectedDiet} onChange={handleDietChange}>
        <option value="">-- Select Diet --</option>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="keto">Keto</option>
        <option value="gluten-free">Gluten-Free</option>
        <option value="paleo">Paleo</option>
      </select>

      <ul>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
               <strong>{recipe.title}</strong> <br></br> 
               

               <span>Ingredients: {recipe.ingredients.join(', ')}</span>
            </li>
          ))
        ) : (
          <li>No recipes found</li>
        )}
      </ul>
    </div>
  );
}

export default FilterPanel;