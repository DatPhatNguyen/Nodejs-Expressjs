const express = require("express");
// const CourseController = require("../app/controllers/CourseController");
const router = express.Router();
const meController = require("../app/controllers/MeController");
// create new controller from

// newsController.index(); lay phuong thuc index tu Controller news

// newController.index;
router.get("/stored/courses", meController.storedCourses);
module.exports = router;
