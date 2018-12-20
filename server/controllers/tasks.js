var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
    getTasks: function (req, res) {
        Task.find({}, function (err, task) {
            if (err) {
                res.json({ message: "Error", error: err })
            } else {
                res.json({ message: "Success", data: task })
            }
        })
    },

    retrieveTaskByID: function (req, res) {
        Task.find({ _id: req.params.id }, function (err, task) {
            if (err) {
                res.json({ message: "Error", error: err })
            } else {
                res.json({ message: "Success", data: task })
            }
        })
    },

    addTask: function (req, res) {
        var task = new Task(req.body)

        task.save(function (err) {
            if (err) {
                console.log("Error")

                res.json({ message: "Error", error: err })
            } else { // else console.log that we did well and then redirect to the root route
                console.log("Success")

                res.json({ message: "Success created", data: task })
            }
        })

    },

    removeTask: function (req, res) {
        Task.deleteOne({ _id: req.params.id }, function (err, task) {
            if (err) {
                res.json({ message: "Error", error: err })
            } else {
                res.json({ message: "Success", data: task })
            }
        })
    },

    editTask: function (req, res) {
        Task.updateOne({ _id: req.params.id }, req.body, function (err) {
            if (err) {
                res.json({ message: "Error", error: err })
            } else {
                res.json({ message: "Success" })
            }
        })
    }
}

