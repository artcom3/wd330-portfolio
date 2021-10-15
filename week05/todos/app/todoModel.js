const LOCAL_STORAGE_KEY = 'tasks-key';

let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

class todoModel {
    

    static getAllTasks() {
        return tasks;
    }

    static createTask(name) {
        return {
            id: Date.now().toString(),
            name: name,
            complete: false
        };
    }
}