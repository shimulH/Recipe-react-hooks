import React from "react";
import "./SearchBar.css";

export default function SearchBar({ getSearch, setSearch }) {
  return (
    <div
      id="search"
      className="section section-search white white-text center scrollspy"
    >
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3 className="teal-text lighten-2 left-align ">Search Recipe</h3>
            <div className="input-field">
              <form onSubmit={getSearch}>
                <input
                  onChange={setSearch}
                  type="text"
                  className="red lighten-3 autocomplete"
                  id="autocomplete-input"
                  placeholder="Chicken"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
