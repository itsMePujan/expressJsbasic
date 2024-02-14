require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const indexRouter = require("./routes");
//const aboutRouter = require("./routes/about");
const app = express();
const PORT = Number(process.env.PORT);

app.use(morgan("dev"));
app.use(express.json()); //data as json
app.use("/assets", express.static("public"));

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`App is Running on PORT ${PORT} `);
});
