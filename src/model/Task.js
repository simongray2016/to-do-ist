import uuidv4 from 'uuid/v4'

export default class Task {
    constructor(name, priority = 4) {
        this.id = uuidv4();
        this.name = name;
        this.date = new Date();
        this.isCompleted = false;
        this.priority = priority;
    }

    editName = (newName) => {
        this.name = newName;
    }

    editDate = (newDate) => {
        this.date = new Date(newDate);
    }

    completed() {
        this.isCompleted = true;
    }

    editPriority = (number) => {
        this.priority = number;
    }
}