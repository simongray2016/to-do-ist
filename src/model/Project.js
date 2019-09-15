export default class Project {
    constructor() {
        this.list = [];
        this.completedList = [];
        this.listToday = [];
        this.listWeek = [];
    };

    setList = list => this.list = list;

    setCompletedList = list => this.completedList = list;

    addTask = task => {
        this.list.push(task);
        this.updateListDate();
        return [...this.list];
    }

    addCompletedList = id => {
        this.list = this.list.map(task => task.id === id ? { ...task, isCompleted: true } : task)
        let index = this.list.findIndex(task => task.isCompleted)
        let task = this.list.splice(index, 1);
        this.completedList.unshift(task[0]);
        this.updateListDate();
    }

    editTask = (id, newTask) => {
        this.list = this.list.map(task => task.id === id ? { ...task, ...newTask } : task);
        this.updateListDate();
    }
    deleteTask = id => {
        let index = this.list.findIndex(task => task.id === id);
        this.list.splice(index, 1);
        this.updateListDate();
    }

    changePriority = (id, index) => {
        this.list = this.list.map(task => task.id === id ? { ...task, priority: index } : task);
        this.updateListDate();
    }

    findTaskName = query => this.list.filter(task => task.name.includes(query))

    setDate = (id, date) => {
        this.list = this.list.map(task => task.id === id ? { ...task, date } : task);
        this.updateListDate();
    }

    sortBy = (value) => {
        if (value === 'name') {
            this.list.sort((task1, task2) => task1.name.charCodeAt(0) - task2.name.charCodeAt(0));
        }
        else {
            this.list.sort((task1, task2) => task1[value] - task2[value]);
        }
        return [...this.list];
    };

    undoTask = id => {
        this.completedList = this.completedList.map(task => task.id === id
            ? { ...task, isCompleted: false, date: new Date() } : task);
        let index = this.completedList.findIndex(task => !task.isCompleted);
        let task = this.completedList.splice(index, 1);
        this.addTask(task[0])
        this.updateListDate();
    };

    updateListDate = () => {
        let now = new Date().getDate();
        let today = task => task.date.getDate() - now === 0;
        let weekDay = task => {
            let diffDays = task.date.getDate() - now;
            if (diffDays < 8) {
                return true
            }
        }
        this.listToday = this.list.filter(task => today(task));
        this.listWeek = this.list.filter(task => weekDay(task))
}
}