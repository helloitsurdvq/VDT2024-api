import express from "express";
import cors from 'cors';
import { PORT, MongoDBURL } from "./config.js";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Hello world");
});

mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log("App is connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
