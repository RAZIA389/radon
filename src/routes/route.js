const express = require('express');


const router = express.Router();

//  router.get('/movies', function (req, res) {

//     const movies = ["rang de basanti" , "The shining", " lords of the ring" ," batman begins"]

//     res.send('movies')

// });

router.get('/movies/:indexNumber', function (req, res) {

    const movies = ["rang de basanti" , "The shining", " lords of the ring" ," batman begins"]
     const movie = req.params.indexNumber
    if (movie == 1){
        return "rang de basanti"
    }

    if (movie == 2){
        return "The shining"
    }

    if (movie == 3){
        return "lords of the ring"
    }
   
    if (movie == 4){
        return "batman begins "
    }

    else (movie > 4)
     return "Enter valid index number"


    res.send('movie')

});










module.exports = router;
// adding this comment for no reason