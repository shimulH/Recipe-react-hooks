import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDeteils from "./components/DetailsRecipe";

// import "./App.css";

const App = () => {
  const APP_ID = "7bca9fd0";
  const APP_KEY = "f3b81e0fac9dd2e367c609fa8df4c8e0";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [pageIndex, setPageIndex] = useState(1);
  const [ingredients, setIngredients] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
    data.hits.length === 0
      ? setError(() => "Sory, there is no recipe for your search, try again")
      : setRecipes(data.hits);
    // setRecipes(data.hits);
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
  const handleIndex = index => {
    setPageIndex(index);
  };
  const handleDetails = (index, ingredients, currentRecipe) => {
    setPageIndex(index);
    setIngredients(ingredients);
    setCurrentRecipe(currentRecipe);
  };
  const displayPage = index => {
    switch (index) {
      default:
      case 1:
        return (
          <RecipeList
            recipes={recipes}
            handleDetails={handleDetails}
            error={error}
          />
        );
      case 0:
        return (
          <RecipeDeteils
            handleIndex={handleIndex}
            query={query}
            ingredients={ingredients}
            currentRecipe={currentRecipe}
          />
        );
    }
  };

  return (
    <div id="home" className="scrollspy App">
      <NavBar />
      <div className="center ">
        <SearchBar setSearch={onSearchChange} getSearch={getSearch} />
      </div>
      {displayPage(pageIndex)}
    </div>
  );
};

export default App;
