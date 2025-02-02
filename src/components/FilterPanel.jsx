import React, { useState } from 'react';

function FilterPanel({ onFilter, setLoading }) {
  const [diet, setDiet] = useState('');

  const handleFilterChange = async (e) => {
    const selectedDiet = e.target.value;
    setDiet(selectedDiet);
    
    setLoading(true);
    let url = 'http://localhost:3001/recipes';

    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);

      const filteredData = selectedDiet
        ? data.filter((recipe) => recipe.diet.toLowerCase() === selectedDiet.toLowerCase())
        : data; 

      onFilter(filteredData);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setLoading(false);
      onFilter([]);
    }
  };

  return (
    <div className="filter">
      <select value={diet} onChange={handleFilterChange}>
        <option value="keto">Keto</option>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="high-protein">High-Protein</option>
        <option value="non-vegetarian">Non-Vegetarian</option>
        <option value="pescatarian">Pescatarian</option>
      </select>
    </div>
  );
}

export default FilterPanel;
