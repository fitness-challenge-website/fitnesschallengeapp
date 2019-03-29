const userCtrl = require("../controller").user;
const actCtrl = require("../controller").activity;
const useractCtrl = require("../controller").user_activity;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: "Hello World"
  }));

  //User
  app.post("/api/user", userCtrl.getData);

  //Activity
  app.post("/api/activity", actCtrl.getData);

  //User_Activity
  app.post("/api/addStat", useractCtrl.addStat);
  app.post("/api/delStat", useractCtrl.delStat);
  app.post("/api/getUserStats", useractCtrl.getUserStats);
  app.post("/api/getLeaders", useractCtrl.getLeaders);
}
