import express from "express";
const app = express();
const port = process.env.PORT || 5000;

app
  .route("/")
  .get((req, res) =>
    res.send(
      "<h1>Willkommen zu unserer ersten API.</h1><h2>Das sind die Enpunkte:</h2><p>/users um alle User zu bekommen (get) und um einen neuen User zu kreieren (post)</p><p>/users/id um einen User zu bekommen (get), um einen User zu löschen (delete) und um einen User zu aktualisieren (put)</p>"
    )
  );

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
  );