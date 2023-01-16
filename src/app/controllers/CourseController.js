const Course = require("../models/Course");

const { mongooseToObject } = require("../../untils/mongoose");
class CourseController {
  //todo:  GET /courses/:slug
  showDetail(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/showDetail", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  //todo: GET / courses /create
  create(req, res, next) {
    res.render("courses/create");
  }

  //todo:  POST /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {
        console.error(error);
      });
  }

  // GET / coures /:id/ edit

  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => res.render("courses/edit", { course: mongooseToObject(course) }))
      .catch(next);
  }

  // PUT /courses/id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("me/stored/courses"))
      .catch(next);
  }
  // DELETE /courses/id

  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}
module.exports = new CourseController();
