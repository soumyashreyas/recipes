import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import { apiAccessPoint } from "../services/RecipeClient";
import { recipeDetailUrl } from "../services/RecipeApi";
import Loader from "../components/Loader";
import RecipeBasicDetail from "./RecipeBasicDetail";
import RecipeIngredients from "./RecipeIngredients";
import RecipeNutrients from "./RecipeNutrients";

function RecipeDetail() {
  const [recipeDetail, setRecipeDetail] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeNutrients, setRecipeNutrients] = useState([]);
  let { id } = useParams();
  let url = recipeDetailUrl(id);
  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    await apiAccessPoint
      .get(url)
      .then((response) => {
        setRecipeDetail(response.data.recipe);
        setRecipeIngredients(response.data.recipe.ingredientLines);
        setRecipeNutrients(response.data.recipe.totalNutrients);
      })
      .catch((err) => {
        <Loader />;
        console.log("Error", err);
      });
  };

  if (recipeDetail.uri) {
    return (
      <div>
        <RecipeBasicDetail recipeDetail={recipeDetail} />
        <section className="py-0 m-lg-4">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5">
            <RecipeIngredients recipeIngredients={recipeIngredients} />
            <RecipeNutrients recipeNutrients={recipeNutrients}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default RecipeDetail;
