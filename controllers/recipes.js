import pool from "../db/pg.js";

export const getRecipes = (req, res) => {
    pool.query("SELECT * FROM recipes")
        .then((data) => res.json({ recipes: data.rows }))
        .catch((err) => console.log(err));
  
};
