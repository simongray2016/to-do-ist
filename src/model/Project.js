export default class Project {
    constructor(name) {
        this.name = name
        this.list = [];
        this.color = '#8b8b8b';
    }

    editName = newName => this.name = newName;

    addTask = task => {
        this.list.push(task);
        return [...this.list];
    }

    completedTask = id => this.list.map(task => task.id === id ? {...task, isCompleted: true} : task )

    editTask = (name, id) => this.list.map(task => task.id === id ? {...task, name} : task )

    deleteTask = id => {
        let index = this.list.findIndex(task => task.id === id);
        this.list.splice(index, 1)
        return [...this.list];
    }

    changePriority = (id, index) => this.list.map(task => task.id === id ? {...task, priority: index} : task)

    findTaskName = query => this.list.filter(task => task.name.includes(query))

    editColor = newColor => this.color = newColor;
}