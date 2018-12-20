
var tasks = require("../controllers/tasks.js")

module.exports = function (app) {
    app.get('/all', function (req, res) {
        tasks.getTasks(req, res)
    })
    
    app.get("/:id", function (req, res) {
        tasks.retrieveTaskByID(req, res)
    })

    app.post("/new", function (req, res) {
        console.log("*******")
        tasks.addTask(req, res)
    })    
    
    app.delete("/remove/:id/", function (req, res) {
        tasks.removeTask(req, res)
    })    

    app.put("/edit/:id", function (req, res) {
        tasks.editTask(req, res)
    })    



}