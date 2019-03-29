const userCtrl = require("../controller").user;
const actCtrl = require("../controller").activity;
const grpCtrl = require("../controller").group;
const bgCtrl = require("../controller").badges;
const frCtrl = require("../controller").friends;
const useractCtrl = require("../controller").user_activity;
const userbgCtrl = require("../controller").user_badges;
const usergrpCtrl = require("../controller").user_group;


let Activity = require("../models").activity;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: "Hello World"
  }));

  //User
  app.post("/api/getUserData", userCtrl.getUserData);

  //Activity
  app.post("/api/activity", actCtrl.getData);

  app.post("/api/addactivity", (req, res) => {
    let activity = new Activity(req.body);
    activity.save()
        .then(activity => {
            res.status(200).json({'activity': 'activity added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new activity failed');
        });
  });

}
