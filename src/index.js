import './style.css';
import './assets/return.png';
import loadList from './modules/load-page.js';
import TaskList from './modules/tasklist.js';

const tasklist = new TaskList();
loadList(tasklist);
