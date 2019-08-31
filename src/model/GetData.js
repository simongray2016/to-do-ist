import Project from './Project';
import Task from './Task';
import TaskData from './TaskData';

let inbox = new Project('inbox');

for ( let task of TaskData ) {
    let newTask = new Task(task);
    inbox.addTask(newTask);
}

export default inbox;
