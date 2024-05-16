const express = require('express');
const path = require('path')
const cors = require('cors');
const db = require('./config');
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const traineeRouter = require("./routes/traineeRoute")
app.use("/api/trainee", traineeRouter)

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
  db();
});
