const User = require("../models").User;

module.exports = {
  create(req, res){
  },
  delete(req, res){
  },
  update(req, res){
  },
  login(req, res){
  },
  getData(req, res){
    //test
    return User.findAll({
    }).then(data => {return res.send(data)})
  }
}
