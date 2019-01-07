
var bodyParser = require('body-parser');
var newFriends = require("../data/friends.js");
var express = require("express");
var router = express.Router();



//module.exports = function(app){
	router.get('/api/friends', function(req,res){
    res.json(newFriends);
  });

  router.post('/api/friends', function(req,res){
	//grabs the new friend's scores to compare with friends in newFriends array
	//console.log(req.body);
	var newFriendScores = req.body.scores;
    var scoresLst = [];
    var match = 0;

    //runs through all current friends in list
    for(var i=0; i<newFriends.length; i++){
      var scoresDiff = 0;
      //run through scores to compare friends
      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(newFriends[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      //push results into scoresArray
      scoresLst.push(scoresDiff);
    }

    //after all friends are compared, find best match
    for(var i=0; i<scoresLst.length; i++){
      if(scoresLst[i] <= scoresLst[match]){
        match = i;
      }
    }

    //return bestMatch data
    var perfectMatch = newFriends[match];
    res.json(perfectMatch);

    //pushes new submission into the friendsList array
    newFriends.push(req.body);
  });

  module.exports = router;
//};
