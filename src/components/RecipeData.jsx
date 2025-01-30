import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/recipes/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch recipe");
        }
        return response.json();
      })
      .then((data) => setRecipe(data))
      .catch((error) => setError(error.message));
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (!recipe) return <p>Loading recipe...</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} width="250" />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Diet Type: {recipe.diet}</p>
    </div>
  );
}

export default RecipeDetail:
