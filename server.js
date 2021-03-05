const express = require("express");

const path = require("path");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("./client/public"));

app.get('/rest', (req, res) => {
  res.sendFile(path.resolve('./api/restaurants.json'))
})

app.get('/rest/:id', (req, res) => {
  res.sendFile(path.resolve(`./api/${req.params.id}.json`))
  console.log(req.params.id)
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/public/index.html"));
});

app.listen(port, () => {
  console.log("listening on port:", port);
});