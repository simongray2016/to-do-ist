export default class Project {
    constructor() {
        this.list = [];
        this.completedList = []
    }

    addTask = task => {
        this.list.push(task);
        return [...this.list];
    }

    completedTask = id => this.list.map(task => task.id === id ? { ...task, isCompleted: true } : task)

    addCompletedList = () => {
        let index = this.list.findIndex(task => task.isCompleted)
        let task = this.list.splice(index, 1);
        this.completedList.push(task);
        return [...this.completedList]
    }

    editTask = (id, newTask) => this.list.map(task => task.id === id ? { ...task, ...newTask } : task)

    deleteTask = id => {
        let index = this.list.findIndex(task => task.id === id);
        this.list.splice(index, 1)
        return [...this.list];
    }

    changePriority = (id, index) => this.list.map(task => task.id === id ? { ...task, priority: index } : task)

    findTaskName = query => this.list.filter(task => task.name.includes(query))

    setDate = (id, date) => this.list.map(task => task.id === id? {...task, date} : task);

    sortBy = (value) => {
        if(value === 'name') {
            this.list.sort((task1, task2) => task1.name.charCodeAt(0) - task2.name.charCodeAt(0));
        }
        else {
            this.list.sort((task1, task2) => task1[value] - task2[value]);
        }
        return [...this.list];
    };
}