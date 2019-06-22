import React from "react";
// import "./Recipe.css";

export default function Recipe(props) {
  return (
    <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
      <div className="card">
        <img
          src={props.recipe.recipe.image}
          alt={props.recipe.recipe.label}
          className="img-card-top"
          style={{ height: "14rem" }}
        />
        <div className="card-body text-capitalize">
          <h6>{props.recipe.recipe.label}</h6>
          <h6 className="text-warning text-slanted">Provided by</h6>
        </div>
        <div className="card-footer">
          <button
            type="button"
            className="btn btn-primary text-capitalize"
            // onClick={() => handleDetails(0, recipe_id)}
          >
            details
          </button>
          <a
            // href={source_url}
            className="btn btn-success mx-2 text-capitalize"
            target="_blank"
            rel="noopener noreferrer"
          >
            recipe source
          </a>
        </div>
      </div>
    </div>
  );
}
