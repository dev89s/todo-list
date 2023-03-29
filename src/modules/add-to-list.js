import TaskList from "./tasklist";
import loadTasksToList from "./load-tasks";

/**
 * 
 * @param {TaskList} tasklist 
 * @param {String} newTask 
 */
const addToList = (tasklist, newTask) => {
  tasklist.addTask(newTask);
  loadTasksToList(tasklist);
}

export default addToList;