const express = require("express");
const morgan = require("morgan");

const app = express();

// midlewares
app.use(morgan("dev"));

// endpoints / routes

app.get("/products", (req, res) => {
  res.send("Getting products");
});

app.post("/products", (req, res) => {
  res.send("Creating products");
});

app.put("/products", (req, res) => {
  res.send("Updating products");
});

app.delete("/products", (req, res) => {
  res.send("Deleting products");
});

app.get("/products/:id", (req, res) => {
  res.send("Getting one product");
});

const port = 3000;
app.listen(port, () => {
  console.log(`running on port ${port}`);
});
