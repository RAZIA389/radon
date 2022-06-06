const express = require('express');
const router = express.Router();

let players = [
    
     {
     "name": "manish",
      "dob": "1/1/1995",
      "gender": "male",
      "city": "jalander",
      "sports":[
          "swimming"
      ]
     } ,
     {
         "name": "glopal",
         "dob": "2/2/1996",
         "gender": "male",
         "city":"delhi",
         "sports": [
             "soccer"
         ]
    
     },
      {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports":[
            "soccer"
        ]
      },
    
      {
    
         "name": "sunny",
         "dob": "1/2/2000",
         "gender":"male",
         "city":"punjab",
         "sports": [
             "hockey"
         ]
    
      },
    
    ]

router.post('/players', function(req, res) {
    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeated = false

   for(let i=0; i<players.length; i++){
       if(players[i].name == newPlayersName) {
           isNameRepeated = true;
           break;
       }
   }

    if(isNameRepeated) {
        res.send("the player already exist")

    }
    else {
        players.push(newPlayer)
        res.send(players)    
    }
});





module.exports = router;