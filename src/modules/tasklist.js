class TaskList {
  list = [];

  constructor() {
    this.list = [];
  }

  addTask = (description, completed = false) => {
    const task = {
      description,
      completed,
      index: this.list.length + 1,
    };
    this.list.push(task);
  }
}

export default TaskList;