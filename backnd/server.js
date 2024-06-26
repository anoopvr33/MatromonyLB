import express from "express";
import router from "./router/index.js";
import mongoose from "./db/db.js";

const app = express();

app.use(express.json());

app.use(router);

app.use("*", (req, res) => {
  res.json("route not found");
});
// app.use();

app.listen(2300, () => {
  console.log("app is  running at 2300");
});
