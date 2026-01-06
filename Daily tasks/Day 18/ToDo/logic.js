function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const task = taskInput.value;

  let li = document.createElement("li");
  li.innerText = task;

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
    li.innerText = task;
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
