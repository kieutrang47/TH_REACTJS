import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
        <input type="text" className="email-input" placeholder="Enter your email" />
        <button className="send-btn">Send</button>
      </div>
      <div className="footer-section">
        <h4>Learn More</h4>
        <ul>
          <li><a href="#">Our Cooks</a></li>
          <li><a href="#">See Our Features</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Recipes</h4>
        <ul>
          <li><a href="#">What to Cook This Week</a></li>
          <li><a href="#">Pasta</a></li>
          <li><a href="#">Dinner</a></li>
          <li><a href="#">Vegetarian</a></li>
        </ul>
      </div>
      <p>© 2023 Cheffy Company - Terms of Service | Privacy Policy</p>
    </footer>
  );
};

export default Footer;