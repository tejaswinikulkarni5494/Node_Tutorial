const express= require('express');
const app=express();
const port =4000
const routes = require('./routing/routes');
console.log("hi1");
routes.start(app);

app.get('/', (req, res)=>{
    res.send('Hello---welcome..');
})

app.listen(port, () =>{
    console.log("listening on ", port);
})