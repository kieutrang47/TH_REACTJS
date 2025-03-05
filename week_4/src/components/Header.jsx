import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Cheffy</div>
      <input type="text" placeholder="What would you like to cook?" className="search-bar" />
      <nav>
        <a href="#">What to cook</a>
        <a href="#">Recipes</a>
        <a href="#">Ingredients</a>
        <a href="#">Occasions</a>
        <a href="#">About Us</a>
      </nav>
      <button className="recipe-btn">Your Recipe Box</button>
      <img src="src/img/ava1.jpeg" alt="User" className="avatar" />
    </header>
  );
};

export default Header;