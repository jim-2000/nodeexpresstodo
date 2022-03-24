const  express = require('express')
const app = express()
const tasks = require('./routes/tasks')
//  config
app.use(express.json())
// middleware
app.use('/api/v1/tasks', tasks);

//
app.get('/api/v1/tasks', (req, res) => {

    res.send('Hello JIM!')
    
})

// app.get('/api/v1/tasks')         -get all the tasks
// app.post('/api/v1/tasks')        - create new  tasks
// app.get('/api/v1/tasks/:id')     -get single tasks
// app.patch('/api/v1/tasks/:id')   - update tasks
// app.delete('/api/v1/tasks/:id')  - delete tasks

const port = 3000
//
app.listen(port, () => console.log(`Example app listening on port ${port}`))