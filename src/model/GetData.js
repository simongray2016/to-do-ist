import Project from './Project';
import Task from './Task';
import TaskData from './TaskData';

let taskList = new Project('inbox');

for ( let task of TaskData ) {
    let {name, date, priority} = task;
    let newTask = new Task(name, date, priority);
    taskList.addTask(newTask);
}

export default taskList;
