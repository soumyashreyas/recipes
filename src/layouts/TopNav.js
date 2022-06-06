import React from "react";
import { NavLink, Link } from "react-router-dom";
import Search from "../components/Search";
// import { isLoggedin, clearUserInfo } from "../components/User";

function TopNav() {

  // const  isUserLoggedIn = isLoggedin();
  return (
    // <!-- Responsive navbar-->
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-lg-5">
        <Link className="navbar-brand" to="/">
          My Recipe App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Search />
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="results/recipes">
                Recipes
              </NavLink>
            </li>
            {/* <li>
              {isUserLoggedIn ? (
                <NavLink
                  className="nav-link"
                  to="login"
                  onClick={() => clearUserInfo()}
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink className="nav-link" to="login">
                  Login
                </NavLink>
              )}
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
