const express = require("express");
const app = express();

app.set("port", process.env.PORT || 5000);

app.get("/", (req, res) => {
  res.json({
    data: "hello World",
  });
});

app.listen(app.get("port"), function () {
  console.log("Express api is running on port", app.get("port"));
});
