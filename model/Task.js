const  mongoose  = require("mongoose");
//
 
const TaskSchema = new mongoose.Schema({
    name : {
        type: String,
        required:[true, 'Must Provide a name'],
        trim: true,
        maxlength: [50, 'Name must be less than 50 characters']
    },
    description : {
        type: String,
        maxlength: [500, 'Description must be less than 500 characters']
    },
    completed : {
        type: Boolean,
        default: false,
    },
    date : {type: Date , default: Date.now("YYYY-MM-DD", "HH:mm")},
    color : {type:String, default: '#ddd43d'},
});
 

//
module.exports = mongoose.model('Task', TaskSchema);