import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './src/components/Navbar';
import SearchForm from './src/components/SearchForm';
import RecipeList from './components/RecipeList';
import RecipeDetail from './src/components/RecipeDetail';
import FilterPanel from './src/components/FilterPanel';
import Footer from './src/components/Footer';
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
      })};
};