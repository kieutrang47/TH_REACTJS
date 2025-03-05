import React from "react";
import Header from "./components/Header";
import RecipeBox from "./components/RecipeBox";
import Footer from "./components/Footer";
import "./styles.css"; // Import file CSS chung

function App() {
  return (
    <div>
      <Header />
      <RecipeBox />
      <Footer />
    </div>
  );
}

export default App;