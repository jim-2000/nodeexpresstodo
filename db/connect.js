const mongose = require('mongoose');
const connectionString  =  "mongodb+srv://jim-2000:VpeoqqAVtbwRXJlt@task.kynle.mongodb.net/TaskManager?retryWrites=true&w=majority";
// 
const connectDb = async (url) => {
    try {
        await mongose.connect(url );
        console.log('MongoDB connected...');
    } catch (error) {
        console.log(error);
    }

}
 

module.exports = connectDb;