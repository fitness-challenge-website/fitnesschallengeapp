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
  app.post("/api/createAccount", userCtrl.createAccount);
  app.post("/api/editProfile", userCtrl.editProfile);
  app.post("/api/delUser", userCtrl.delUser);

  //Group
  app.post("/api/createGroup", grpCtrl.createGroup);
  app.post("/api/delGroup", grpCtrl.delGroup);
  app.post("/api/getGroupData", grpCtrl.getGroupData);

  //Friend
  app.post("/api/reqFriend", frCtrl.request);
  app.post("/api/resFriend", frCtrl.response);
  app.post("/api/isFriend", frCtrl.isFriend);

  //Badge
  app.post("/api/addBadge", bgCtrl.addBadge);
  app.post("/api/delBadge", bgCtrl.delBadge);
  app.post("/api/getBadgeData", bgCtrl.getBadgeData);
  app.post("/api/getAllBadges", bgCtrl.getAllBadges);

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
