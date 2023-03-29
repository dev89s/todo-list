class TaskList {
  list = [];

  constructor() {
    this.list = [];
  }

  addTask = (description, completed = false) => {
    for (let i = 0; i < this.list.length; i += 1) {
      this.list[i].index = this.list.length + 1 - i;
    }
    const task = {
      description,
      completed,
      index: 1,
    };
    this.list.push(task);
  }
}

export default TaskList;