const Activity = require("../models").Activity;

module.exports = {
  create(req, res){
  },
  delete(req, res){
  },
  update(req, res){
  },
  getData(req, res){
    return Activity.findAll({
      attributes:['a_name', 'avg_calorie']
    }).then(data => {return res.send(data)})
  }
}
