import express from "express";
import {
  getAllAuthors,
  getSingleAuthor
} from "../controllers/authors.js";

const authors = express.Router(); //router-methode kommt aus express package

//um alle users zu bekommen
authors.route('/').get(getAllAuthors);

//um nur einen user zu bekommen
authors.route('/:id').get(getSingleAuthor);

export default authors;
