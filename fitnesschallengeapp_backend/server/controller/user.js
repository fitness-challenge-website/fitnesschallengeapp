const User = require("../models").User;
const User_Badge = require("../models").User_Badge;

module.exports = {
  createAccount(req, res){
    var data = {
      uid: req.body.uid,
      username: req.body.username,
      f_name: req.body.f_name,
      l_name: req.body.l_name,
      weight: req.body.weight,
      height: req.body.height,
      age: req.body.age
    }

    return User.create(data).then(uid =>{
      res.status(200).send(uid);
    }).catch(err => {
      res.status(400).send(err);
      console.log(err);
    });
  },
  editProfile(req, res){
    var data = {
      f_name: req.body.f_name,
      l_name: req.body.l_name,
      weight: req.body.weight,
      height: req.body.height,
      age: req.body.age,
    }
    return User.update(data, {
      where: {
        uid: req.body.uid
      }
    }).then(() => {
      res.status(200).send("Success");
    }).catch(err => {
      res.status(400).send(err);
      console.log(err);
    });
  },
  delUser(req, res){
    return User.destory({
      where:{
        uid: req.body.uid
      }
    }).then(() => {
      res.status(200).send("Success");
    }).catch(err => {
      res.status(400).send(err);
      console.log(err);
    })
  },
  getUserData(req, res){
    return User.findOne({
      where:{
        uid: req.body.uid
      }
    }).then(data => {
      res.status(200).send(data);
    }).catch(err => {
      res.status(400).send(err);
      console.log(err);
    })
  },
  listUsers(req, res){
    return User.findAll().then(data => {
      res.status(200).send(data);
    }).catch(err => {
      res.status(400).send(err);
      console.log(err);
    })
  },
  getLeaders(req, res){

  }
}
