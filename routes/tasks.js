const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const {getAllTasks,createNewTask,singetTask,updateTask,deleteTask} = require('../controller/tasks');

// 
router.route('/').get(getAllTasks).post(createNewTask);
router.route('/:id').get(singetTask).patch(updateTask).delete(deleteTask);


module.exports = router;