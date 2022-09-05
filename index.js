const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

const URL = "mongodb://localhost:27017/PORTFOLIO";

const PORT = process.env.PORT || "8080";

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", require("./routes/experience"));
app.use("/", require("./routes/project"))
app.use("/", require("./routes/profile"))
app.use("/", require("./routes/forms"))

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log("Server started at port : " + PORT));
  })
  .catch((err) => {
    console.log("Error: " + err.message);
  });