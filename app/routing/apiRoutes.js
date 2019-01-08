var newFriends = require("../data/friends.js");
var express = require("express");
var router = express.Router();

	router.get('/api/friends', function(req,res){
    res.json(newFriends);
  });

  router.post('/api/friends', function(req,res){
	
	var newFriendScores = req.body.scores;
    var scoresLst = [];
    var match = 0;

    
    for(var i=0; i<newFriends.length; i++){
      var scoresDiff = 0;
   
      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(newFriends[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      
      scoresLst.push(scoresDiff);
    }

    for(var i=0; i<scoresLst.length; i++){
      if(scoresLst[i] <= scoresLst[match]){
        match = i;
      }
    }

  
    var perfectMatch = newFriends[match];
    res.json(perfectMatch);

    newFriends.push(req.body);
  });

  module.exports = router;

