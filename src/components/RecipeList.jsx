import React from "react";
import { Link } from "react-router-dom";

function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <p>No Recipes Found</p>;
  }

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title}  />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default RecipeList



