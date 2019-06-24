import React from "react";

export default function NavBar() {
  return (
    <div>
      <div className="navbar-fixed">
        <nav className="green">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                FoodBlog
              </a>
              <a href="#" data-target="mobile-nav" className="sidenav-trigger">
                <i className="material-icons">Menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#search">Search</a>
                </li>
                <li>
                  <a href="#popular">Popular Places</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-nav">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#search">Search</a>
        </li>
        <li>
          <a href="#popular">Popular Places</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
