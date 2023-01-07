const express = require("express");
const router = express.Router();
const siteController = require("../app/controllers/SiteControllers"); // create new controller from

// newsController.index(); lay phuong thuc index tu Controller news
// newController.index;
router.use("/search", siteController.search);
router.use("/", siteController.index);
module.exports = router;
