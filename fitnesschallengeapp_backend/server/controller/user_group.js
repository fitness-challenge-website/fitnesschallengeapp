const User_Group = require("../models").User_Group;
const User = require("../models").User;
const Group = require("../models").Group;

module.exports = {
  request(req, res){
    var data = {
      uid: req.body.uid,
      gid: req.body.gid
    };

    return User_Group.create(data).then(ugid =>{
      res.status(200).send(ugid);
    }).catch(err => {
      res.status(400).send(err);
      console.log(err);
    })
  },
  response(req, res){
    return User_Group.update({

    }, {
      where: {
        ugid: req.body.ugid
      }
    }).then(() => {
      res.status(200).send("Success");
    }).catch(err => {
      res.status(400).send(err);
      console.log(err);
    });
  },
  leaveGroup(req, res){
    return User_Group.destroy({
      where: {
        ugid: req.body.ugid,
        uid: req.body.uid
      }
    }).then(() => {
      res.status(200).send("Success");
    }).catch(err => {
      res.status(400).send(err);
      console.log(err);
    });
  },
  isBelongTo(req, res){
    var belongs = false;

    User_Group.findAll({
      where:{
        ugid: req.body.ugid,
        uid: req.body.uid,
        status: "A"
      }
    }).then(data => {
      if(data){
        return true;
      }
    });

    return false;
  },
  getMyGroups(req, res){
    return User_Group.findAll({
      where: {
        uid: req.body.uid,
        status: 'A'
      },
      include: [
        {
          model: Group,
          attributes: ['b_name'],
          as: "Group"
        }
      ]
    }).then(data => {
      res.status(200).send(data);
    }).catch(err => {
      res.status(400).send(err);
      console.log(err);
    });
  }
}
