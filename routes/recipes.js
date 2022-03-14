
import express from "express";
import { getRecipes } from "../controllers/recipes.js";


const recipes = express.Router();


recipes.route("/").get(getRecipes);


export default recipes;