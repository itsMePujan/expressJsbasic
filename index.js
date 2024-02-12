const express = require("express");
const indexRouter = require("./routes");
//const aboutRouter = require("./routes/about");
const app = express();

app.use(express.json()); //data as json
app.use("/", indexRouter);

app.listen(4000, () => {
  console.log("App is Running ");
});
