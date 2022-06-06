import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts";
import Homepage from "./pages/Homepage";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" exact element={<Login />} />
          <Route path="/" exact element={<Layout />}>
            <Route path="" element={<Homepage pagetitle="" />} />
            <Route path="results/recipes/:search" element={<Recipes />} ></Route>
            <Route path="results/recipes/" element={<Recipes />}></Route>
            <Route path="results/recipe/:id" element={<RecipeDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
