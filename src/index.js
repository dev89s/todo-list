import './style.css';
import './assets/return.png';
import loadList from './modules/load-list';
import TaskList from './modules/tasklist';

const tasklist = new TaskList();
tasklist.addTask("homework");
tasklist.addTask("buy groceries");
tasklist.addTask("house cleaning");
tasklist.addTask("last item");

loadList(tasklist);