import React from 'react'
import axios from 'axios'

export const recipeListUrl = (search) => {
  return "?type=public&q="+search+"&app_id=212bf178&app_key=40b7ac4c65bcd804e50ed625c73ec0a8%09&ingr=5-8&random=true";
};
export const recipeDetailUrl = (id) => {
  return id+"?type=public&app_id=212bf178&app_key=40b7ac4c65bcd804e50ed625c73ec0a8%09";
};
