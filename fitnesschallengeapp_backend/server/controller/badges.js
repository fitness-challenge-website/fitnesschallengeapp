const Friends = require("../models").Friends;
const User = require("../models").User;
module.exports = {
  addBadge(req, res){
    var data = {
      b_name: req.body.b_name,
      level: req.body.level
    }
    return Badge.create(data).then(bid =>{
      res.status(200).send(bid);
    }).catch(err => {
      res.status(400).send(err);
      console.log(err);
    })
  },
  delBadge(req, res){
    return Badge.destroy({
      where: {
        bid: req.body.bid
      }
    }).then(() =>{
      res.status(200).send("Success");
    }).catch(err =>{
      res.status(400).send(err);
      console.log(err);
    })
  },
  getBadgeData(req, res){
    return Badge.findOne({
      where: {
        bid: req.body.bid
      }
    }).then(badge => {
      res.status(200).send(badge);
    }).catch(err =>{
      res.status(400).send(err);
      console.log(err);
    });
  },
  getAllBadges(req, res){
    return Badge.findAll({
    }).then(data =>{
      res.status(200).send(data);
    }).catch(err =>{
      res.status(400).send(err);
      console.log(err);
    })
  }
}
