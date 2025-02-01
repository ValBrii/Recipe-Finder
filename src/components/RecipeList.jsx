import React from 'react';
import { Link } from 'react-router-dom';

function RecipeList({ recipes, searchPerformed, loading }) {
  return (
    <div className='recipe-container'>
      {loading ? (
        <p className='loading'>Loading...</p>
      ) : searchPerformed && recipes.length === 0 ? (
        <p id="alert">Meal not in our database!!</p>
      ) : (
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <p>Click image below to view recipe</p>
              <img src={recipe.image} alt={recipe.title} />
              <p>{recipe.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecipeList;
