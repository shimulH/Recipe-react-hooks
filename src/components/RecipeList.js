import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipes }) {
  return (
    <div>
      {console.log(recipes)}
      <div class="container my5">
        {/* title */}
        <div class="row">
          <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
            <h1 className="text-slanted">recipe list</h1>
          </div>
        </div>
        {/* End Title */}
        <div className="row">
          {recipes.map(recipe => {
            return (
              <Recipe
                key={"1"}
                recipe={recipe}
                // handleDetails={handleDetails}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
