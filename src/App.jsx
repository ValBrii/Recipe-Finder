import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import Navbar from './components/Navbar';
import FilterPanel from './components/FilterPanel';
import Footer from './components/Footer';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    setRecipes(data);
    setSearchPerformed(true);
  };

  const handleFilter = (filteredData) => {
    setRecipes(filteredData);
    setSearchPerformed(true);
  };

  return (
    <Router>
      <div className="App">
         <Navbar />
         <p id="welcome">
    Welcome to Incroyable, your ultimate recipe finder! 
    Search for mouthwatering recipes by ingredient or meal type,
     and tailor your results with dietary preferences. 
    Discover, cook, and savor incredible dishes in just a few clicks. Bon appétit !
         </p>
          <Routes>
          <Route
            path="/search"
            element={
              <>
                <SearchForm onSearch={handleSearch} setLoading={setLoading} />
                <RecipeList recipes={recipes} searchPerformed={searchPerformed} loading={loading} />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route
            path="/filter"
            element={
              <>
                <FilterPanel onFilter={handleFilter} setLoading={setLoading} />
                <RecipeList recipes={recipes} searchPerformed={searchPerformed} loading={loading} />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




