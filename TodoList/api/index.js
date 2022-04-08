const express = require("express");
const router=express.Router();
const service = require('./../service');

router.get("/", service.getArrowMethod);

router.post("/create", function(req, res){
    console.log('Inside Post create')
    console.log(req.query);
    return res.json({name: req.query.abc});
});

router.put("/update", function(req, res){
    console.log("Inside Post create");
    console.log(req.query);
    return res.json({name: req.query.abc});
});

router.delete("/delete",)

module.exports = router;