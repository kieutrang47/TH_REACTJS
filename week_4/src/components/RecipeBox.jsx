import React, { useEffect, useState } from "react";
import "../styles/Recipe.css";

const RecipeBox = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://67c83e650acf98d0708594ce.mockapi.io/v1/api/posts/posts")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  return (
    <main className="recipe-box">
      {/* Profile of Emma */}
      <div className="profile-container">
        <img
          src="src/img/ava1.jpeg"
          alt="Emma Gonzalez"
          className="avatar"
        />
        <div className="profile-info">
          <h2>Emma Gonzalez's Recipe Box</h2>
          <p>
            Emma Gonzalez is a deputy editor at Cheffy, bringing her expertise as a former cooking editor at The Los Angeles Times...
          </p>
          {/* Thông tin Subscribers + Nút Share */}
          <div className="profile-actions">
            <span className="subscribers">6.5k Subscribers</span>
            <button className="share-btn">Share</button>
          </div>
        </div>
      </div>

     
      <div className="tabs">
        <button className="active">Saved Recipes</button>
        <button>Folders</button>
        <button>Recipes by Genevieve</button>
      </div>

    
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.avatar} alt={recipe.name} />
            <h3>{recipe.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
};

export default RecipeBox;
 



// test du liệu dùng file data thuần
// import React from "react";
// import recipes from "../data/recipes";

// const RecipeBox = () => {
//   return (
//     <main className="recipe-box">
//       <h2>Emma Gonzalez's Recipe Box</h2>
//       <p>
//         Emma Gonzalez is a deputy editor at Cheffy, bringing her expertise as a former cooking editor at The Los Angeles Times...
//       </p>
//       <div className="recipe-grid">
//         {recipes.map((recipe, index) => (
//           <div key={index} className="recipe-card">
//             <img src={recipe.image} alt={recipe.name} />
//             <h3>{recipe.name}</h3>
//             <p>{recipe.time} minutes</p>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default RecipeBox;