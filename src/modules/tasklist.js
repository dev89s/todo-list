class TaskList {
  list = [];

  constructor() {
    this.list = [];
  }

  addTask = (description, taskDone = false) => {
    const task = {
      description: description,
      taskDone: taskDone,
      index: this.list.length,
    };
    this.list.push(task);
  }
}

export default TaskList;