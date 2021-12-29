import "dotenv/config.js";
import express from "express";
import authors from "./routes/authors.js";
import recipes from "./routes/recipes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/authors", authors); //benutze den authors endpunkt fuer alles was in /users passieren soll// middleware
app.use("/", recipes);

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
