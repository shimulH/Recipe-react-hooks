import React from "react";
import "./SearchBar.css";

export default function SearchBar({ getSearch, setSearch }) {
  return (
    <div
      id="search"
      className="section section-search lime lighten-4 white-text center scrollspy"
    >
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3 className="red-text lighten-2">Search Recepi</h3>
            <div className="input-field">
              <form onSubmit={getSearch}>
                <input
                  onChange={setSearch}
                  type="text"
                  className="white grey-text autocomplete"
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
