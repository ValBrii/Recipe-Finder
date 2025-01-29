import react from 'react';
import { useState, useEffect } from 'react';

function FilterPanel(){
    const [recipes, setRecipes] = useState([]);
    const [filter, setFilter] = useState('');

    //Get request
    useEffect(()=>{
        fetch("http://localhost:3000/recipes")
        .then((response)=>response.json())
        .then((data)=>{
            setRecipes(data)
        })
        .catch((error)=>{
            console.error("Error fetching recipes", error)
        })
},[])
        
  // Handle filter change
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.ingredients &&
    recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(filter.toLowerCase())  // Check if any ingredient matches filter
    )
  );


  return (
    <div>
      <h1>Filter Recipes</h1>
      <input
        type="text"
        placeholder="Search by recipe ingredient"
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>{recipe.ingredients}</li>
        ))}
      </ul>
    </div>
  );
}


    



export default FilterPanel