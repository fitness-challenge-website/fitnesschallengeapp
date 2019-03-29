const User_Activity = require("../models").User_Activity;
const Activity = require("../models").Activity;
const User = require("../models").User;

module.exports = {
  addStat(req, res){
    var data = {
      uid: req.uid,
      aid: req.aid,
      duration: req.duration,
      weight: req.weight,
      rep: req.rep,
      distance: req.distance,
      speed: req.speed,
      point: req.point
    }

    return User_Activity.create(data).then(id => {
      res.status(200).send("Success");
    }).catch(err =>{
      res.status(400).send(err);
    });
  },
  delStat(req, res){
    var uaid = req.uaid;
    return User_Activity.destroy({
      where:{
        uaid: uaid
      }
    }).then(() => {
      res.status(200).send("Successfully deleted");
    }).catch(err => {
      res.status(400).send(err);
    });
  },

  updateStat(req, res){
  },
  getUserStats(req, res){
    return User_Activity.findAll({
      where: {
        uid: 1 //req.body.uid
      },
      include:[
        {
          model: Activity,
          attributes:['a_name'],
          as: 'Activity'
        }
      ]
    }).then(stats => {
      res.send(stats);
    }).catch(err =>{
      res.status(400).send(err);
      console.log(err);
    });
  },
  //TODO: order by count(uid) group by uid
  getLeaders(req, res){
    return User_Activity.findAll({
      group:['User_Activity.uid', 'User.uid'],
      attributes:['uid'],
      include:[
        {
          model: User,
          as:'User',
          attributes:['f_name', 'l_name']
        }
      ]
    }).then(leaders => {
      res.send(leaders);
    })
  }
}
