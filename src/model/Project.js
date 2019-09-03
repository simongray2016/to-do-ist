export default class Project {
    constructor(name) {
        this.name = name
        this.list = [];
        this.color = '#8b8b8b';
    }

    editName = newName => this.name = newName;

    addTask = task => this.list.push(task);

    editColor = newColor => this.color = newColor;

}