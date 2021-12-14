import express from "express";
import {
  getAllUsers,
  getSingleUser
} from "../controllers/users.js";

const users = express.Router();

//um alle users zu bekommen
users.route("/").get(getAllUsers);

//um nur einen user zu bekommen
users.route("/:id").get(getSingleUser);

export default users;
