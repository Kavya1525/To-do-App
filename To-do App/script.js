function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var taskItem = document.createElement("div");
        taskItem.className = "task-item";
        taskItem.innerHTML = taskInput.value + '<span onclick="removeTask(this)">X</span>';
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function removeTask(element) {
    element.parentNode.remove();
}
