import React, { useState } from "react";
import { Link } from "react-router-dom";

function RecipesView(props) {
  const { recipes } = props;
  const [error, setError] = useState("");


  return recipes.map((recipe,index) => {
    var recipeId = recipe.recipe.uri.split("#");
    return (
      <div className="col mb-5" key={index}>
        <div className="card h-100">
          {/* Product image */}
          <Link to={`/results/recipe/${recipeId[1]}`}>
            <img className="card-img-top" src={recipe.recipe.image} alt="..." />
          </Link>
          {/* Receipe details */}
          <div className="card-body p-2">
            <div className="text-start">
              <Link to={`/results/recipe/${recipeId[1]}`}>
                <h6 className="fw-bolder">{recipe.recipe.label}</h6>
              </Link>
              <b>
              {Math.round(recipe.recipe.calories)} calories -{" "}
              {recipe.recipe.ingredients.length} Ingredients
              </b>
              <div className="pt-1 source">{recipe.recipe.source}</div>
            </div>
          </div>
          <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-outline-dark mt-auto"
                      >
                        Save
                      </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default RecipesView;
