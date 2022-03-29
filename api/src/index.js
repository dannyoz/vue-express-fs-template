const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200,
};

app.set("port", process.env.PORT || 5000);

app.get("/", cors(corsOptions), (req, res) => {
  res.json({
    data: "hello World",
  });
});

app.listen(app.get("port"), function () {
  console.log("Express api is running on port", app.get("port"));
});
