import pool from "../db/pg.js";

export const getAllAuthors = (req, res) => {
  //datenbank abfragen select * from authors
  pool
    .query("SELECT * FROM authors")
    .then((data) => res.json({ authors: data.rows }))
    .catch((err) => console.log(err));
};

export const getSingleAuthor = (req, res) => {
  //datenbank abfragen select * from authors where id=xy
  const id = req.params.id;
  pool.query("SELECT * from authors WHERE id=$1", [id]).then((data) => {
    // console.log(data);
    if (data.rowCount === 0) {
      res.status(404).send("User mit dieser ID existiert nicht");
    } else {
      res.status(200).json(data.rows[0]);
    }
  });
};


