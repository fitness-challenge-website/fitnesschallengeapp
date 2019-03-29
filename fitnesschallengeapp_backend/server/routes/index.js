const userCtrl = require("../controller").user;
const actCtrl = require("../controller").activity;
const grpCtrl = require("../controller").group;
const bgCtrl = require("../controller").badges;
const frCtrl = require("../controller").friends;
const useractCtrl = require("../controller").user_activity;
const userbgCtrl = require("../controller").user_badges;
const usergrpCtrl = require("../controller").user_group;


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: "Hello World"
  }));

  //User
  app.post("/api/getUserData", userCtrl.getUserData);

  //Activity
  app.post("/api/activity", actCtrl.getData);

  //User_Activity
  app.post("/api/addStat", useractCtrl.addStat);
  app.post("/api/delStat", useractCtrl.delStat);
  app.post("/api/getUserStats", useractCtrl.getUserStats);
  app.post("/api/getLeaders", useractCtrl.getLeaders);
}
