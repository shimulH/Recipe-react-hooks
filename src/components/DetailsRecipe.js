import React from "react";

export default function DetailsRecipe({
  currentRecipe,
  ingredients,
  handleIndex
}) {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <button
              type="button"
              className="btn btn-warning mb-5 text-capitalize"
              onClick={() => handleIndex(1)}
            >
              back
            </button>
            <img
              src={currentRecipe.recipe.image}
              className="d-block w-100"
              alt={"1"}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <h5 className="text-uppercase">{currentRecipe.recipe.label}</h5>
            <h6 className="text-warning text-capitalize text-slanted">
              provided by
            </h6>
            <a
              //   href={publisher_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-2 text-capitalize"
            >
              publishe webpage
            </a>
            <a
              //   href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mx-3 mt-2 text-capitalize"
            >
              recipe url
            </a>
            <ul className="list-group mt-4">
              <h2 className="mt-3 mb4">Ingredients</h2>
              {ingredients.map((ingredient, index) => {
                return (
                  <li key={index} className="list-group-item text-slanted">
                    {ingredient.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* <h1>Ingredients</h1>
      {getIngredients()} */}
      {console.log(currentRecipe)}
    </div>
  );
}
