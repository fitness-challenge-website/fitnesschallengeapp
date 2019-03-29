const Group = require("../models").Group;
const User_Group = require("../models").User_Group;

module.exports = {
  createGroup(req, res){
    var data = {
      g_name: req.body.g_name
    };

    return Group.create(data).then(gid =>{
      User_Group.create({
        gid: gid,
        req_uid: req.body.uid,
        res_uid: req.body.uid,
        status: 'A'
      }).then(ugid => {
        res.status(200).send("Group id: " + gid + " User_Group id: " + ugid);
      }).catch(err => {
        res.status(400).send(err);
        console.log(err);
      })
    }).catch(err =>{
      res.status(400).send(err);
      console.log(err);
    });

  },
  delGroup(req, res){
    return Group.destroy({
      where: {
        gid: req.body.gid
      }
    }).then(() =>{
      res.status(200).send("Success");
    }).catch(err => {
      res.status(400).send(err);
      console.log(err);
    });
  },
  getGroupData(req, res){
    return Group.findOne({
      where: {
        gid: req.body.gid
      }
    }).then(group => {
      res.status(200).send(group);
    }).catch(err => {
      res.status(400).send(err);
      console.log(err);
    });
  }
}
