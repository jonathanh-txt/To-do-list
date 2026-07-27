const input = document.getElementById("todoInput");
const addButton = document.getElementById("add");
const todoList = document.getElementById("todoList");
addButton.addEventListener("click", function () {
  if (input.value.trim() === "") {
    alert("input tidak boleh kosong");
  } else {
    /todo item/;
    const toDoItem = document.createElement("div");
    toDoItem.classList.add("todoitem");
    todoList.append(toDoItem);
    /list/;
    const newList = document.createElement("div");
    console.log(input.value);
    newList.classList.add("list");
    newList.textContent = input.value;
    toDoItem.append(newList);
    input.value = "";
    /div button del/;
    const DivDelButton = document.createElement("div");
    DivDelButton.classList.add("divdelbutton");
    toDoItem.append(DivDelButton);
    /tomboldelete/;
    const delButton = document.createElement("button");
    delButton.classList.add("delbutton");
    DivDelButton.append(delButton);
    /img trash/;
    const imgDel = document.createElement("img");
    imgDel.classList.add("imgDel");
    delButton.append(imgDel);
    imgDel.src = "/Project to do list/assets/trash.png";
    delButton.addEventListener("click", function () {
      toDoItem.remove();
    });
  }
});
