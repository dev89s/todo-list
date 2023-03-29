import './style.css';
import './assets/return.png';
import loadList from './modules/load-list.js';
import TaskList from './modules/tasklist.js';
import addToList from './modules/add-to-list';

const tasklist = new TaskList();
loadList(tasklist);

// const newTaskInput = document.querySelector('.new-task-input');
// const returnBtn = document.querySelector('.return-btn');
// newTaskInput.addEventListener('keypress', (e) => {
//   if (e.key == 'Enter' && newTaskInput.value !== '') {
//     addToList(tasklist, newTaskInput.value);
//     newTaskInput.value = '';
//   }
// });
// returnBtn.addEventListener('click', () => {
//   if (newTaskInput.value !== '') {
//     addToList(tasklist, newTaskInput.value);
//     newTaskInput.value = '';
//   }
// });