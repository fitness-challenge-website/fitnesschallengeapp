const Activity = require("../models").Activity;

module.exports = {
  addActivity(req, res){
    var data = {
      aid: req.body.aid,
      a_name: req.body.a_name,
      a_description: req.body.a_description,
      a_type: req.body.a_type,
      a_duration: req.body.a_duration,
      a_distance: req.body.a_distance
    }

    return Activity.create(data).then(id => {
      res.status(200).send("Success");
    }).catch(err =>{
      res.status(400).send(err);
      console.log(err)
    });
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
