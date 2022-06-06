import React from "react";
import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    // <!-- Page Content-->
    <div>
      <div className="py-5">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div className="m-4 m-lg-5">
              <h1 className="display-5 fw-bold">Add a Recipe</h1>
              <p className="fs-5">Search to find and save recipes</p>
              <NavLink className="btn btn-primary btn-lg" to="results/recipes/fresh+picks">
                Search Recipes
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
