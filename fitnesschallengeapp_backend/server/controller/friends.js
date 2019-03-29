const Friends = require("../models").Friends;
const User = require("../models").User;
module.exports = {
  request(req, res){
    var data = {
      req_uid: req.body.req_uid,
      res_uid: req.body.res_uid,
      status: 'P'
    }
    return Friends.create(data).then(fid => {
      res.status(200).send(fid);
    }).catch(err =>{
      res.status(400).send(err);
      console.log(err);
    });
  },
  response(req, res){

  },
  //TODO: need to check the status (P: Pending, R: Rejected, A: Accepted)
  isFriend(req, res){
    var isFriend = false;
    Friends.findOne({
      where:{
        req_uid: req.body.req_uid,
        res_uid: req.body.res_uid
      }
    }).then(data =>{
      return True;
    }).catch(err =>{
      res.status(400).send(err);
      console.log(err);
    });

    Friends.findOne({
      where:{
        req_uid: req.body.res_uid,
        res_uid: req.body.req_uid
      }
    }).then(data =>{
      return True;
    }).catch(err =>{
      res.status(400).send(err);
      console.log(err);
    });

    return False;
  }
}
