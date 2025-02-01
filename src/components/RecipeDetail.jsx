import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const numericId = Number(id); 

    fetch(`http://localhost:3001/recipes/${numericId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Meal not found!");
        }
        return res.json();
      })
      .then((data) => {
        if (!data || Object.keys(data).length === 0) {
          throw new Error("Meal not found!");
        }
        setRecipe(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipe:", error);
        setRecipe(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (!recipe) return <p className="error">Recipe Not Found</p>;

  return (
    <section className="recipe-detail">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
       <article className="recipe-info">
        <p>Meal Name:{recipe.title}</p>
        <h3>Diet Type: {recipe.diet}</h3>
        <h4>INGREDIENTS:</h4>
        <ol className="list">
          {recipe.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ol>
        <h4>RECIPE:</h4>
        <ol className="list">
          {recipe.procedure.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </article>
    </section>
  );
}

export default RecipeDetail;
