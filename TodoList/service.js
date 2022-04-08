function getMethod(req, res){
    console.log("INSIDE get create")
    return res.json({pass: "yes"});
}

const getMethod2=function(req, res){
    console.log('creating function part 2');
}

const getArrowMethod = (req, res) =>{
    console.log('Arrow method')
    let query=req.query;
    console.log("-----------qry inside arrow", query);
    return res.json({pass: "yes"});
}

module.exports = {
    getMethod,
    getArrowMethod
}
