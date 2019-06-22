import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Recipe from "./components/Recipe";
import RecipeList from "./components/RecipeList";

// import "./App.css";

const App = () => {
  const APP_ID = "7bca9fd0";
  const APP_KEY = "f3b81e0fac9dd2e367c609fa8df4c8e0";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const onSearchChange = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div id="home" className="scrollspy App">
      <NavBar />
      <div className="center ">
        <SearchBar setSearch={onSearchChange} getSearch={getSearch} />
        {/* <div className="display-card-app">
          <Recipe recipes={recipes} />
        </div> */}
      </div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
