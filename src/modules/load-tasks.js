import removeTask from './remove-task.js';
import editTask from './edit-task.js';
import { completeTask, uncompleteTask } from './status-update.js';
/**
 *
 * @param {TaskList} tasklist
 */
const loadTasksToList = (tasklist) => {
  const taskListContainer = document.querySelector('.todolist');
  taskListContainer.textContent = '';
  //* produce the task list
  for (let i = 0; i < tasklist.list.length; i += 1) {
    const li = document.createElement('li');
    li.classList.add(i + 1);
    li.classList.add('task-item');

    const textBox = document.createElement('input');
    textBox.classList.add('task-textbox');
    textBox.value = tasklist.list[i].description;

    textBox.classList.add('task-input');
    textBox.style.display = 'none';
    const label = document.createElement('label');
    label.classList.add(i + 1);
    label.classList.add('task-label');
    label.textContent = tasklist.list[i].description;
    label.style.width = '100%';
    if (tasklist.list[i].completed === true) {
      label.style.textDecoration = 'line-through';
      label.style.opacity = '30%';
    }
    label.addEventListener('click', () => {
      label.style.display = 'none';
      textBox.style.display = 'block';
      textBox.focus();
    });
    textBox.addEventListener('focusout', () => {
      label.style.display = 'block';
      textBox.style.display = 'none';
    });

    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.classList.add(i + 1);
    check.classList.add('task-checkbox');
    if (tasklist.list[i].completed === true) {
      check.checked = true;
    }

    const threeDots = document.createElement('span');
    threeDots.classList.add(i + 1);
    threeDots.classList.add('three-dots');
    threeDots.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="15px" width="15px">
      <path d="m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z" />
      </svg>
      `;
    const trashBtn = document.createElement('span');
    trashBtn.classList.add('trash-btn');
    trashBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20px" width="20px">
      <path d="m201 210l0 165c0 3-1 5-2 6-2 2-4 3-7 3l-18 0c-3 0-5-1-7-3-2-1-2-3-2-6l0-165c0-2 0-5 2-6 2-2 4-3 7-3l18 0c3 0 5 1 7 3 1 1 2 4 2 6z m73 0l0 165c0 3-1 5-2 6-2 2-4 3-7 3l-18 0c-3 0-5-1-7-3-1-1-2-3-2-6l0-165c0-2 1-5 2-6 2-2 4-3 7-3l18 0c3 0 5 1 7 3 1 1 2 4 2 6z m73 0l0 165c0 3 0 5-2 6-2 2-4 3-7 3l-18 0c-3 0-5-1-7-3-1-1-2-3-2-6l0-165c0-2 1-5 2-6 2-2 4-3 7-3l18 0c3 0 5 1 7 3 2 1 2 4 2 6z m37 207l0-271-256 0 0 271c0 4 1 8 2 12 1 3 3 6 4 7 2 2 3 3 3 3l238 0c0 0 1-1 3-3 1-1 3-4 4-7 1-4 2-8 2-12z m-192-307l128 0-14-34c-1-1-3-2-5-3l-90 0c-2 1-4 2-5 3z m265 9l0 18c0 3-1 5-2 7-2 1-4 2-7 2l-27 0 0 271c0 16-5 30-14 41-9 12-20 17-32 17l-238 0c-12 0-23-5-32-16-9-11-14-25-14-41l0-272-27 0c-3 0-5-1-7-2-1-2-2-4-2-7l0-18c0-3 1-5 2-7 2-1 4-2 7-2l88 0 20-48c3-7 8-13 16-18 7-5 15-7 22-7l92 0c7 0 15 2 22 7 8 5 13 11 16 18l20 48 88 0c3 0 5 1 7 2 1 2 2 4 2 7z"/>
      </svg>
      `;

    li.appendChild(check);
    li.appendChild(textBox);
    li.appendChild(label);
    li.appendChild(threeDots);
    li.appendChild(trashBtn);
    li.draggable = true;
    taskListContainer.appendChild(li);

    //* drag events
    li.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', e.target.classList[0]);
      setTimeout(() => {
        li.style.opacity = '30%';
      }, 0);
    });
    li.addEventListener('dragend', () => {
      li.style.opacity = '100%';
    });
    li.addEventListener('dragenter', (e) => {
      e.preventDefault();
      li.style.borderTop = 'solid 1px red';
      li.style.borderBottomColor = 'red';
    });
    li.addEventListener('dragover', (e) => {
      e.preventDefault();
      li.style.borderTop = 'solid 1px red';
      li.style.borderBottomColor = 'red';
    });
    li.addEventListener('dragleave', () => {
      li.style.borderTop = 'none';
      li.style.borderBottomColor = 'rgba(0, 0, 0, 0.08)';
    });
    li.addEventListener('drop', (e) => {
      const draggableId = e.dataTransfer.getData('text/plain');
      const targetId = e.target.classList[0];
      if (targetId < draggableId) {
        const temp = tasklist.list[draggableId - 1].description;
        for (let i = draggableId - 1; i > targetId - 1; i -= 1) {
          tasklist.list[i].description = tasklist.list[i - 1].description;
        }
        tasklist.list[targetId - 1].description = temp;
      }
      if (targetId > draggableId) {
        const temp = tasklist.list[draggableId - 1].description;
        for (let i = draggableId - 1; i < targetId - 1; i += 1) {
          tasklist.list[i].description = tasklist.list[i + 1].description;
        }
        tasklist.list[targetId - 1].description = temp;
      }
      li.style.borderTop = 'none';
      li.style.borderBottomColor = 'rgba(0, 0, 0, 0.08)';
      localStorage.setItem('tasks', JSON.stringify(tasklist.list));
      loadTasksToList(tasklist);
    });

    //* Eventlisteners for list done check
    check.addEventListener('change', () => {
      if (check.checked) {
        label.style.textDecoration = 'line-through';
        label.style.opacity = '30%';
        completeTask(tasklist, check.classList[0] - 1);
      } else {
        label.style.textDecoration = 'none';
        label.style.opacity = '100%';
        uncompleteTask(tasklist, check.classList[0] - 1);
      }
    });
    //* edit tasks
    let taskDesc;
    textBox.addEventListener('focusin', () => {
      threeDots.style.display = 'none';
      trashBtn.style.display = 'flex';
      taskDesc = textBox.value;
    });
    textBox.addEventListener('focusout', () => {
      if (taskDesc !== textBox.value) {
        editTask(tasklist, li.classList[0], textBox.value);
        label.textContent = textBox.value;
      }
      setTimeout(() => {
        threeDots.style.display = 'flex';
        trashBtn.style.display = 'none';
      }, 500);
    });
    //* remove task
    trashBtn.addEventListener('click', () => {
      removeTask(tasklist, li.classList[0]);
      for (let i = li.classList[0] - 1; i < taskListContainer.childNodes.length; i += 1) {
        const taskId = taskListContainer.childNodes[i].classList[0];
        const otherLi = taskListContainer.childNodes[i];
        const otherLabel = otherLi.querySelector('.task-label');
        const otherThreeDots = otherLi.querySelector('.three-dots');
        const otherCheck = otherLi.querySelector('.task-checkbox');
        otherLabel.classList.replace(taskId, taskId - 1);
        otherThreeDots.classList.replace(taskId, taskId - 1);
        otherCheck.classList.replace(taskId, taskId - 1);
        taskListContainer.childNodes[i].classList.replace(taskId, taskId - 1);
      }
      taskListContainer.removeChild(li);
    });
  }
};

export default loadTasksToList;