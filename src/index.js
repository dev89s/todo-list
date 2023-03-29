import './style.css';
import './assets/return.png';
import loadList from './modules/load-list.js';
import TaskList from './modules/tasklist.js';

const tasklist = new TaskList();
tasklist.addTask('homework');
console.log(tasklist.list);
tasklist.addTask('buy groceries');
console.log(tasklist.list);
tasklist.addTask('house cleaning');
tasklist.addTask('last item');

loadList(tasklist);