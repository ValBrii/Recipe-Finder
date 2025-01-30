import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import FilterPanel from './components/FilterPanel';
import Footer from './components/Footer';
const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const fetchRecipes = () => {
    setLoading(true);
    let url = `http://localhost:3001/recipes?ingredient=${searchTerm}&diet=${filter}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      });
    };
    useEffect(() => {
      fetchRecipes();
    }, 
    [searchTerm, filter]);

    return (
      <Router>
        <Navbar />
        <div className="app">
          {loading && <div className="spinner"></div>}
          <Routes>
          <Route
            path="/search"
            element={<RecipeList recipes={recipes} />}
          />
          <Route
            path="/recipe/:id"
            element={<RecipeDetail />}
          />
          <Route
            path="/filters"
            element={<FilterPanel onFilterChange={setFilter} />}
          />
          </Routes>
          </div>
      </Router>
    );      
};
export default App

