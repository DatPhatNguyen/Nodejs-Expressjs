const express = require("express");
// const CourseController = require("../app/controllers/CourseController");
const router = express.Router();
const courseController = require("../app/controllers/CourseController");
// create new controller from

// newsController.index(); lay phuong thuc index tu Controller news

// newController.index;
router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:id/edit", courseController.edit);
router.put("/:id", courseController.update);
router.delete("/:id", courseController.destroy);
router.get("/:slug", courseController.showDetail);
module.exports = router;
