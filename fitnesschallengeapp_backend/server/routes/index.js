const userCtrl = require("../controller").user;
const actCtrl = require("../controller").activity;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: "Hello World"
  }));

  app.post("/api/user", userCtrl.getData);
  app.post("/api/activity", actCtrl.getData);
}
