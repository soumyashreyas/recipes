import React from "react";

function RecipeIngredients(props) {
  const { recipeIngredients } = props;

  return (
    <div className="col-md-6 bg-light">
      <div className="fs-5 pt-lg-3">
        <span>
          <h6>
          {recipeIngredients.length} Ingredients
          </h6>
        </span>
      </div>
      <div className="lead">
        <ol>
          {recipeIngredients.map((ingr) => (
            <li key={ingr}>{ingr}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeIngredients;
