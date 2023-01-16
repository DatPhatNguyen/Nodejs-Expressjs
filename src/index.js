//todo: require
const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
// override with the X-HTTP-Method-Override header in the request
//todo:  routes
const route = require("./routes");

//todo: Connect to database
const db = require("./config/db");
db.connect();

//todo: POST to PUT
app.use(methodOverride("_method"));

//todo: static url
app.use(express.static(path.join(__dirname, "public")));
console.log("PATH FILE STATIC: ", path.join(__dirname, "public"));
//todo: using to parse data form to json type

app.use(express.json()); //todo: in order to parse another type to json

app.use(
  express.urlencoded({
    extended: true,
  })
);
// app.use(bodyParser.json());
app.use(cors());
//! body parser
// app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
// app.use(bodyParser.json());

//todo: Morgan // HTTP logger

app.use(morgan("combine"));

//todo: Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
//todo: set template engine and file's path
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views"));
console.log("PATH FILE VIEWS:  ", path.join(__dirname, "resource", "views"));
//todo: thay doi route -> bat loi cannot get (404 error)

// Route Init
// 127.0.0.1
route(app);
app.listen(port, () => console.log(`App running at http://localhost:${port}`));
