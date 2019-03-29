const userCtrl = require("../controller").user;
const actCtrl = require("../controller").activity;
const useractCtrl = require("../controller").user_activity;

let Activity = require("../models").activity;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: "Hello World"
  }));

  app.get('/api2', (req, res) => res.status(200).send({
    message: "Hello World2"
  }));

  app.post("/api/user", userCtrl.getData);

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
