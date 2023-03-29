import TaskList from "./tasklist";
/**
 * 
 * @param {TaskList} tasklist 
 * @param {String} newTask 
 */
const addToList = (tasklist, newTask) => {
  tasklist.addTask(newTask);
  const taskListContainer = document.querySelector('.todolist');
  const li = document.createElement('li');
  li.classList.add('task-item');
  li.id = tasklist.length + 1;

  const textBox = document.createElement('textarea');
  textBox.rows = 1;
  textBox.value = newTask;
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

export default addToList;