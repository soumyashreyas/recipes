import React, { useState } from "react";
import { useNavigate } from "react-router";

function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleOnClick = () => {
    let queryString = search;
    queryString = queryString.replace(/ /g, '+');
   
    navigate({ pathname: "results/recipes/"+ `${queryString}` });
    
  };
  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={(e) => e.preventDefault()}>
      <input
        className="form-control-search mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary my-2 my-sm-0"
        onClick={handleOnClick}
      >
        Search
      </button>
    </form>
  );
}

export default Search;
