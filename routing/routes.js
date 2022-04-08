"use strict";
// function sayHello(){
//     console.log("Hello World");
// }

// module.exports = {
//     sayHello : sayHello
// }

(
    function(exportModule){
        const apiRoutes = require("./../TodoList/api/index");
        const v2Routes = require("./../TodoList/api/v2");
        
        exportModule.start = function(app){
            app.use("/todolist/", apiRoutes);
            app.use("/api/v2", v2Routes);
        }
    }
)(module.exports)