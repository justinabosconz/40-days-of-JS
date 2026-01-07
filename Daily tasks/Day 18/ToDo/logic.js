function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const task = taskInput.value.trim();

  if (!task) return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = task;
  li.appendChild(span);
  //li.innerText = task;

  const completeButton = document.createElement("button");
  completeButton.innerText = "✔️";
  completeButton.style.marginLeft = "5px";
  completeButton.onclick = function () {
    li.classList.toggle("completed");
  };
  li.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.style.marginLeft = "5px";
  deleteButton.onclick = function () {
    li.remove();
  };
  li.appendChild(deleteButton);

  const editButton = document.createElement("button");
  editButton.innerText = "EDIT";
  editButton.style.marginLeft = "5px";
  editButton.onclick = function () {
    newText = prompt("Edit task:", span.innerText);
    span.innerText = newText;
  };
  li.appendChild(editButton);

  taskList.appendChild(li);

  taskInput.value = "";
}

// filtering list
function filterTasks() {
  const searchInput = document.getElementById("searchInput").value;
  const inputList = document.querySelectorAll("#taskList li");

  inputList.forEach((item) => {
    item.style.display = item.innerText.includes(searchInput)
      ? "block"
      : "none";
  });
}
