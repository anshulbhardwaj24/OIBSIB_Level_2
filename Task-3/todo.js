let todoLIST = [];

function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();
  if (taskText.length > 0) {
    const task = {
      text: taskText,
      created: new Date(),
      completed: null,
    };
    todoLIST.push(task);
    showtodoLIST();
    taskInput.value = "";
  }
}

function showtodoLIST() {
  const pendingList = document.getElementById("pending-tasks");
  const completedList = document.getElementById("completed-tasks");
  pendingList.innerHTML = "";
  completedList.innerHTML = "";
  todoLIST.forEach((task, index) => {
    const listItem = document.createElement("li");
    const taskText = document.createElement("span");
    // alert(task.text)
    taskText.textContent = task.text;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("id","delete-button")
    deleteButton.setAttribute("class","btn btn-danger")
    deleteButton.onclick = () => deleteTask(index);
    listItem.appendChild(taskText);
    if (task.completed !== null) {
      listItem.style.textDecoration = "line-through";
      const completedTime = document.createElement("ul");
      completedTime.textContent = `Completed on ${task.completed.toLocaleString()}`;
      listItem.appendChild(completedTime);
      const pendingButton = document.createElement("button");
      pendingButton.textContent = "Mark as Pending";
      pendingButton.setAttribute("id","pending-button")
      pendingButton.setAttribute("class","btn btn-info")
      pendingButton.onclick = () => markAsPending(index);
      listItem.appendChild(pendingButton);
      completedList.appendChild(listItem);
    } else {
        const createdTime = document.createElement("ul");
        createdTime.textContent = `Added on ${task.created.toLocaleString()}`;
        listItem.appendChild(createdTime);
        listItem.appendChild(deleteButton);
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.setAttribute("id","edit-button")
      editButton.setAttribute("class","btn btn-dark")
      editButton.onclick = () => editTask(index);
      listItem.appendChild(editButton);
      const completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.setAttribute("id","Complete-button")
      completeButton.setAttribute("class","btn btn-success")
      completeButton.onclick = () => completeTask(index);
      listItem.appendChild(completeButton);
      pendingList.appendChild(listItem);
    }
    
  });
}

function completeTask(index) {
  const task = todoLIST[index];
  task.completed = new Date();
  showtodoLIST();
}

function markAsPending(index) {
  const task = todoLIST[index];
  task.completed = null;
  showtodoLIST();
}

function editTask(index) {
  const task = todoLIST[index];
  const newText = prompt("Enter new task text:", task.text);
  if (newText !== null) {
    task.text = newText.trim();
    showtodoLIST();
  }
}

function deleteTask(index) {
  todoLIST.splice(index, 1);
  showtodoLIST();
}

function cleartodoLIST() {
  todoLIST = [];
  showtodoLIST();
}
