var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/Restful_Task_API', { useNewUrlParser: true });

var TaskSchema = new mongoose.Schema({
    task: { type: String },
    description: { type: String, default: "" },
    completed: { type: Boolean, default: false }

}, { timestamps: true })
mongoose.model('Task', TaskSchema); // We are setting this Schema in our Models as 'User'
module.exports = TaskSchema

