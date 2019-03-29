const Friends = require("../models").Friends;
const User = require("../models").User;
module.exports = {
  request(req, res){
    var data = {
      req_uid: req.uid,
      res_uid: req.res_uid,
      status: 'P'
    }
    return Friends.create(data).then(fid => {
      res.status(200).send(fid);
    }).catch(err =>{
      res.status(400).send(err);
    });
  },
  response(req, res){

  },
  //TODO: need to check the status (P: Pending, R: Rejected, A: Accepted)
  isFriend(req, res){
    var isFriend = false;
    Friends.findOne({
      where:{
        req_uid: req.req_uid,
        res_uid: req.res_uid
      }
    }).then(data =>{
      return True;
    }).catch(err =>{
      res.status(400).send(err);
    });

    Friends.findOne({
      where:{
        req_uid: req.res_uid,
        res_uid: req.req_uid
      }
    }).then(data =>{
      return True;
    }).catch(err =>{
      res.status(400).send(err);
    });

    return False;
  }
}
