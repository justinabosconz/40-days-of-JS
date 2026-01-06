function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const task = taskInput.value;

  if (task.trim() === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = task;
  li.appendChild(span);

  //   complete button
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "✅";
  completeBtn.style.marginLeft = "5px";
  completeBtn.onclick = function () {
    li.classList.toggle("completed");
  };
  li.appendChild(completeBtn);

  //   edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "✏️";
  editBtn.style.marginLeft = "5px";
  editBtn.onclick = function () {
    const editedTask = prompt("Change the task") || "$$$$";
    this.parentElement.firstElementChild.innerText = editedTask;
  };
  li.appendChild(editBtn);

  //   delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.style.marginLeft = "5px";
  deleteBtn.onclick = function () {
    li.remove();
  };
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";
}

// filtering the list
function filterTasks() {
  const searchInput = document.getElementById("searchInput").value;
  const inputList = document.querySelectorAll("#taskList li");

  inputList.forEach((item) => {
    item.style.display = item.innerText.includes(searchInput)
      ? "block"
      : "none";
  });
}
