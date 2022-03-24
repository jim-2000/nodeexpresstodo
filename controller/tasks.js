const getAllTasks = (req, res) => {
    res.send('all the tasks from the database');
}
//

const createNewTask = (req, res) => {
    console.log(req.body);
    // res.send('create new tasks from the database');
    res.status(201).json(req.body);
}
//
const singetTask = (req, res) => {
    res.send('singel tasks from the database');
}

//
const updateTask = (req, res) => {
    res.send('update tasks from the database');
}

const deleteTask = (req, res) => {
    res.send('delete  tasks from the database');
}

//
module.exports ={
    getAllTasks,
    createNewTask,
    singetTask,
    updateTask,
    deleteTask
}