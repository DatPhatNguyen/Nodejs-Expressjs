class NewsController {
  // GET / news
  index(req, res) {
    res.render("news");
  }

  // GET /news/:slug
  showDeTail(req, res) {
    res.send("NEWS DETAIL");
  }
}
module.exports = new NewsController();
