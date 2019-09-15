const now = new Date();

const TaskData = [
    {name: 'Welcome to Todoist Let’s get you started with a few tips:', date: new Date(), priority: 2},
    {name: 'Create a new task', date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8), priority: 1},
    {name: 'Schedule this task', date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1), priority: 4},
    {name: 'Prioritizing your tasks', date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5), priority: 3},
]

export default TaskData;