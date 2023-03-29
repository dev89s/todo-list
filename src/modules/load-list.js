import returnIcon from '../assets/return.png';
import addToList from './add-to-list';

const loadlist = (tasklist) => {
  const taskListContainer = document.querySelector('.todolist');
  taskListContainer.textContent = '';

  //* New Task text input creation
  const newTask = document.createElement('li');
  newTask.classList.add('new-task');

  const textBox = document.createElement('input');
  textBox.setAttribute('placeholder', 'Add to your list...');
  textBox.classList.add('new-task-input');
  newTask.appendChild(textBox);

  const returnBtn = document.createElement('button');
  returnBtn.classList.add('return-btn');
  returnBtn.style.backgroundImage = `url('${returnIcon}')`;
  newTask.appendChild(returnBtn);

  taskListContainer.appendChild(newTask);

  //* Eventlisteners for adding new tasks
  const newTaskInput = document.querySelector('.new-task-input');
  newTaskInput.addEventListener('keypress', (e) => {
    if (e.key == 'Enter' && newTaskInput.value !== '') {
      addToList(tasklist, newTaskInput.value);
      newTaskInput.value = '';
    }
  });
  returnBtn.addEventListener('click', () => {
    if (newTaskInput.value !== '') {
      addToList(tasklist, newTaskInput.value);
      newTaskInput.value = '';
    }
  });

  //* produce the task list
  for (let i = 0; i < tasklist.list.length; i += 1) {
    const li = document.createElement('li');
    li.classList.add('task-item');
    li.id = i + 1;

    const textBox = document.createElement('input');
    textBox.value = tasklist.list[i].description;
    textBox.classList.add('task-input');

    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.classList.add('task-checkbox');

    const threeDots = document.createElement('span');
    threeDots.classList.add('three-dots');
    threeDots.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="12px" width="12px">
      <path d="m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z" />
    </svg>
    `;

    li.appendChild(check);
    li.appendChild(textBox);
    li.appendChild(threeDots);
    taskListContainer.appendChild(li);
  }

  //* Completed task clear button at the bottom
  const tasklistClear = document.createElement('li');
  tasklistClear.classList.add('tasklist-clear-completed');
  const taskClearSpan = document.createElement('span');
  taskClearSpan.textContent = 'Clear all completed';
  tasklistClear.appendChild(taskClearSpan);
  const toDoListContainer = document.querySelector('.todolist-container');
  toDoListContainer.appendChild(tasklistClear);
};

export default loadlist;