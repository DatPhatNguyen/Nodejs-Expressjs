const Course = require("../models/Course");
const { multipleMongooseObject } = require("../../untils/mongoose");
class MeController {
  //todo:  me / stored / courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("me/store-courses", { courses: multipleMongooseObject(courses) })
      )
      .catch(next);
  }
}
module.exports = new MeController();
