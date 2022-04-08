const express = require("express");
const router = express.Router();

router.get("/create", function(){
    console.log("Inside Get create - v2");
});

router.post("/create", function(){
    console.log('Inside post create method');
});

router.delete("/create", );

module.exports = router;