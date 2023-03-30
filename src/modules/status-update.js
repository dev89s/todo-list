import loadPage from "./load-page";
import loadTasksToList from "./load-tasks";
import TaskList from "./tasklist";

const completeTask = (tasklist, index) => {
  tasklist.list[index].completed = true;
  localStorage.setItem('tasks', JSON.stringify(tasklist.list));
}

const uncompleteTask = (tasklist, index) => {
  tasklist.list[index].completed = false;
  localStorage.setItem('tasks', JSON.stringify(tasklist.list));
}
/**
 * 
 * @param {TaskList} tasklist 
 */
const clearAllDone = (tasklist) => {
  tasklist.list = tasklist.list.filter(task => {
    if(task.completed === false) {
      return task;
    }
  });
  for (let i = 0; i < tasklist.list.length; i += 1) {
    tasklist.list[i].index = i;
  }
  localStorage.setItem('tasks', JSON.stringify(tasklist.list));
  loadTasksToList(tasklist);
}

export { completeTask, uncompleteTask, clearAllDone }
