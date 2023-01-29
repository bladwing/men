import express, { json, urlencoded } from "express";
import router from "./router/router.js";
import cors from "cors";
import pkg from "mongoose";

const PORT = process.env.PORT || 5000;

const app = express();

const { connect } = pkg;

connect("mongodb://127.0.0.1:27017/Articles")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });

app.use(cors());

app.use(json());
app.use(urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(router);

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
