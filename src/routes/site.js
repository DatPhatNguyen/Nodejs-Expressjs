const express = require("express");
const router = express.Router();
const siteController = require("../app/controllers/SiteControllers"); // create new controller from

// newsController.index(); lay phuong thuc index tu Controller news
// newController.index;
router.get("/search", siteController.search);
router.get("/", siteController.index);
module.exports = router;
