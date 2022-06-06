import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import { apiAccessPoint } from "../services/RecipeClient";
import { recipeListUrl } from "../services/RecipeApi";
import RecipesView from "./RecipesView";
import Loader from "../components/Loader";
import InfiniteScrollEnd from "../components/InfiniteScrollEnd";

function Recipes() {
  const [recipes, setRecipe] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchKey, setSearchKey] = useState("");

  let { search } = useParams();
  if (search == null) {
    search = "fresh+picks";
  }
  let url = recipeListUrl(search);
  
 
  useEffect(() => {
    setRecipe([]);
    setSearchKey(search);
    fetchRecipes(true);
  }, [search]);


  const fetchRecipes = async (val) => {
    await apiAccessPoint
      .get(url)
      .then((response) => {
        if(val){
          setRecipe([...response.data.hits]);
        } else {
          setRecipe([...recipes, ...response.data.hits]);
        }
       
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  if (recipes.length>0) {
    return (
      <InfiniteScroll
        dataLength={recipes.length}
        next={() => {
          fetchRecipes(false);
        }}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={<InfiniteScrollEnd />}
      >
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <RecipesView recipes={recipes} />
        </div>
      </InfiniteScroll>
    );
  } 
}

export default Recipes;
