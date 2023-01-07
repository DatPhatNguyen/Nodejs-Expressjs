const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsConTroller"); // create new controller from

// newsController.index(); lay phuong thuc index tu Controller news

// newController.index;
router.use("/:slug", newsController.showDeTail);
router.use("/", newsController.index);
module.exports = router;
