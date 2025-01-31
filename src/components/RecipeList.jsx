import React from 'react';
import { Link } from 'react-router-dom';

function RecipeList({ recipes, searchPerformed, loading }) {
  return (
    <div className="recipe-list-container">
      {/* Show "Loading..." while fetching */}
      {loading ? (
        <p>Loading...</p>
      ) : searchPerformed && recipes.length === 0 ? (
        <p id="alert">Recipe Not Found</p>
      ) : (
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <div className="recipe-card">
                <img src={recipe.image} alt={recipe.title} />
                <p>{recipe.title}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecipeList;
