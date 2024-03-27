var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://bhargav:bhargav227@cluster0.r0cqany.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

module.exports = {mongoose};
