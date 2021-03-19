const express = require("express");

const path = require("path");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("./client/build"));

// for all restaurants
app.get('/api', (req, res) => {
  res.sendFile(path.resolve('./api/restaurants.json'))
})


// for just one
app.get('/api/:id', (req, res) => {
  res.sendFile(path.resolve(`./api/${req.params.id}.json`))
  console.log(req.params.id)
});

// catch all
app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/build/index.html"));
});

app.listen(port, () => {
  console.log("listening on port:", port);
});