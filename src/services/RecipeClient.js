import React from 'react'
import axios from 'axios'


export const apiAccessPoint = axios.create({
  baseURL: "https://api.edamam.com/api/recipes/v2" 
});

