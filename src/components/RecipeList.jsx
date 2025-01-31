import React, { useState } from 'react';

function SearchForm({ onSearch, setLoading }) {
  const [searchIngredient, setSearchIngredient] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  const handleSearch = async (type) => {
    setLoading(true);
    let url = 'http://localhost:3001/recipes';

    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);

      if (type === 'ingredient' && searchIngredient.trim()) {
        // Checking the ingredients array
        const filteredData = data.filter((recipe) =>
          recipe.ingredients.some((ing) => 
            ing.toLowerCase() === searchIngredient.toLowerCase()
          )
        );

        onSearch(filteredData.length > 0 ? filteredData : []);
      } else if (type === 'title' && searchTitle.trim()) {
        // Title search is already working, so no change needed
        const filteredData = data.filter((recipe) =>
          recipe.title.toLowerCase() === searchTitle.toLowerCase()
        );
        onSearch(filteredData.length > 0 ? filteredData : []);
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setLoading(false);
      onSearch([]);
    }
  };

  return (
    <div className="search-form">
      <input
        type="text"
        value={searchIngredient}
        onChange={(e) => setSearchIngredient(e.target.value)}
        placeholder="Search by ingredient (e.g., flour, banana)"
      />
      <button onClick={() => handleSearch('ingredient')}>Search</button>

      <input
        type="text"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        placeholder="Search by meal type (e.g., Vegan Pancakes)"
      />
      <button onClick={() => handleSearch('title')}>Search</button>
    </div>
  );
}

export default SearchForm;
