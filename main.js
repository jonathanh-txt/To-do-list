const input = document.getElementById("todoInput");
const addButton = document.getElementById("add");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", function () {
  const newList = document.createElement("div");
  console.log(input.value);
  newList.classList.add("list");
  newList.textContent = input.value;
  todoList.append(newList);
  input.value = "";
});
