const loadlist = (tasklist) => {
  const taskListContainer = document.querySelector('.todolist-container');

  const li = document.createElement('li');
  li.classList.add('new-task');
  const textBox = document.createElement('input');
  li.appendChild(textBox);
  taskListContainer.appendChild(li);
  for (let i = 0; i < tasklist.list.length; i += 1) {
    const li = document.createElement('li');
    li.classList.add('task-item');
    li.id = i;
    const textBox = document.createElement('input');
    textBox.value = tasklist.list[i].description;
 
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    li.appendChild(check);
    li.appendChild(textBox);
    taskListContainer.appendChild(li);
  }

}

export default loadlist