import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipes, handleDetails, error }) {
  return (
    <div>
      <div className="container my5">
        {/* title */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
            <h1 className="text-slanted green-text">recipe list</h1>
          </div>
        </div>
        {/* End Title */}
        <div className="row">
          {error ? (
            <h1 className="text-danger text-center">{error}</h1>
          ) : (
            recipes.map((recipe, index) => {
              return (
                <Recipe
                  key={index}
                  recipe={recipe}
                  handleDetails={handleDetails}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
