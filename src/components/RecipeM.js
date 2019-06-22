import React from "react";
// import "./Recipe.css";

export default function Recipe(props) {
  return props.recipes.map(recipe => (
    <div className="container display-card">
      <div className="card recipe">
        <div className="card-image" key={recipe.recipe.label}>
          {/* <h1 className="blue-grey-text darken-4">{recipe.recipe.label}</h1> */}
          <p>{recipe.recipe.calories}</p>
          <img className="" alt="" src={recipe.recipe.image} />
          <span className="card-title">{recipe.recipe.label}</span>
          <div className="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
}
