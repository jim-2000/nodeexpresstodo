const  express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect');
require('dotenv').config();
// middleware
app.use(express.json())
//  config
app.use('/api/v1/tasks', tasks);
const connectionString  =  "mongodb+srv://jim-2000:VpeoqqAVtbwRXJlt@task.kynle.mongodb.net/TaskManager?retryWrites=true&w=majority";

//
app.get('/api/v1/tasks', (req, res) => {
    res.send('Hello JIM!')    
})



// app.get('/api/v1/tasks')         -get all the tasks
// app.post('/api/v1/tasks')        - create new  tasks
// app.get('/api/v1/tasks/:id')     -get single tasks
// app.patch('/api/v1/tasks/:id')   - update tasks
// app.delete('/api/v1/tasks/:id')  - delete tasks
// username = jim-2000 pass = VpeoqqAVtbwRXJlt;
//mongodb+srv://jim-2000:<password>@task.kynle.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const port = 3000
//

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI);
        
        app.listen(port, () => console.log(`Example app listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start();