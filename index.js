const express = require("express");
const indexRouter = require("./routes");
const aboutRouter = require("./routes/about");
const app = express();

app.get("/", indexRouter);
app.get("/about", aboutRouter);

app.listen(4000, () => {
  console.log("App is Running ");
});
