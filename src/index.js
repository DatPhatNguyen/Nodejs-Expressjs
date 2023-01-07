const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const port = 3000;
const route = require("./routes");
// static url
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//todo: Morgan // HTTP logger

app.use(morgan("combine"));

//todo: Template engine

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views"));

// app.set("views", "./src/resource/views");

//todo: thay doi route -> bat loi cannot get /
// app.get("/trang-chu", (req, res) => res.send("Hello World"));

// Route Init
route(app);
// 127.0.0.1
app.listen(port, () => console.log(`Running at http://localhost:${port}`));
