 // Task Controller 

const Task  = require('../model/Task');
//
const getAllTasks = async (req, res) => {
    try {
        const data = await Task.find({});
        console.warn(data.length);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
     
    res.end();
}
//

const createNewTask = async (req, res) => {
    
//
try {
    const task = await Task.create({
        name : req.body.name,
        description : req.body.description,
        completed : req.body.completed,
        date : Date.now(),
        color : req.body.color,
    });
    res.status(200).json(task);
} catch (error) {
    res.status(500).json({message: error.message});
}
    //
    res.end();
   
}
//
const singetTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findById(id);
        if (!task) {
           return  res.status(404).json({message : 'task not found '});
        }      
        
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
     res.end();
}

//
const updateTask = async (req, res) => {
try {
    const id = req.params.id;
    const task = await Task.findByIdAndUpdate(id, {
        name : req.body.name,
        description : req.body.description,
        completed : req.body.completed,
        date : Date.now(),
        color : req.body.color,

    } , {new : true,runValidators : true});
    if (!task) {
        return  res.status(404).json({message : 'task not found '});
     }      
     
     res.status(200).json(task);
} catch (error) {
    res.status(500).json({message: error.message});
}
    res.end();
}
//=========

const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findOneAndDelete({_id : id});
         
        if (!task) {
            return  res.status(404).json({message : 'task not found '});
         }      
         
         res.status(200).json({task :null, message : 'task deleted'});
    } catch (error) {
        res.json(error);
    }
    res.end();
}

//
module.exports ={
    getAllTasks,
    createNewTask,
    singetTask,
    updateTask,
    deleteTask
}