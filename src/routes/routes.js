import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import Login from "../pages/Login"
import Layout from "../layouts"
import Homepage from "../pages/Homepage"
import Recipes from "../pages/Recipes"
import RecipeDetail from "../pages/RecipeDetail"


const routes = (
    <BrowserRouter>
        <Routes>
        <Route path="login" exact element={<Login/>} />
          <Route path="/" exact element={<Layout/>}>
            <Route path="" element={<Homepage pagetitle="" />} />
            <Route path="results/recipes" element={<Recipes />} >
            </Route>
            <Route path="results/recipes/:id" element={<RecipeDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
  

export default routes