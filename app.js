const taskInput = document.getElementById('newTask');
const addButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('input', function() {
  addButton.disabled = this.value.trim() === "" || taskList.getElementsByTagName('li').length >= 7;
});

addButton.addEventListener('click', function() {
  const newTask = document.createElement('li');
  newTask.textContent = taskInput.value;
  taskList.appendChild(newTask);
  taskInput.value = '';
  addButton.disabled = true;

  // Add delete button to each task
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  newTask.appendChild(deleteButton);
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(newTask);
  });

  // Add rename button to each task
  const renameButton = document.createElement('button');
  renameButton.textContent = 'Rename';
  newTask.appendChild(renameButton);
  renameButton.addEventListener('click', function() {
    const newName = prompt('Enter new name', newTask.textContent.replace('DeleteRename', ''));
    if (newName) newTask.textContent = newName;
    newTask.appendChild(deleteButton);
    newTask.appendChild(renameButton);
  });
});
