const express = require('express');
const router = express.Router();

const controller = require("../controllers/controller")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", controller.createBook  )

router.get("/getBooks", controller.getBooks)
router.get("/getauthor", controller.getauthor) 
router.post("/createAuthor", controller.createAuthor)
router.get("/getAuthorName", controller.getAuthorName)





module.exports = router;