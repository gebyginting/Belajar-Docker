// Import controller
const controller = require("../controllers/main.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Rute artikel
  app.post("/server/matakuliah", controller.addData);
  app.get("/server/matakuliah", controller.getData);
};
