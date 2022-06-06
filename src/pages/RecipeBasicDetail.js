import React from "react";
import { Link, NavLink } from "react-router-dom";

function RecipeBasicDetail(props) {
  const { recipeDetail } = props;
  return (
    <section className="py-0">
      <div className="container px-4 px-lg-5 mt-3">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <ol className="breadcrumb mb-4 ps-4">
            <li className="breadcrumb-item">
              <Link to="/results/recipes">Back to Recipes</Link>
            </li>
          </ol>
          <div className="col-md-6">
            <img
              className=" mb-5 mb-md-0"
              src={recipeDetail.images.REGULAR.url}
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bolder">{recipeDetail.label}</h3>
            <div className="fs-5 mb-5">
              <span>
                See full recipe on:{" "}
                <a href={recipeDetail.url} target="_blank">{recipeDetail.source}</a>
               
              </span>
            </div>
            <span>
              <NavLink className="btn btn-primary btn-lg" to="#">
                Save Recipe
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecipeBasicDetail;
