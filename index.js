const express = require("express");
const app = express();
const port = 3000;
//todo: thay doi route -> bat loi cannot get /
// app.get("/trang-chu", (req, res) => res.send("Hello World"));
app.get("/tin-tuc", (req, res) =>
  // route
  res.send("World")
);
// 127.0.0.1
app.listen(port, () => console.log(`Running at http://localhost:${port}`));
