const input = document.getElementById("todoInput");
const addButton = document.getElementById("add");
const todoList = document.getElementById("todoList");
let doneList = 0;
const doneCount = document.getElementById("donecount");
addButton.addEventListener("click", function () {
  if (input.value.trim() === "") {
    alert("input tidak boleh kosong");
  } else {
    /todo item/;
    const toDoItem = document.createElement("div");
    toDoItem.classList.add("todoitem");
    todoList.append(toDoItem);
    /done button/;
    const divDoneButton = document.createElement("div");
    divDoneButton.classList.add("divdonebutton");
    toDoItem.append(divDoneButton);
    const doneButton = document.createElement("button");
    doneButton.classList.add("donebutton");
    divDoneButton.append(doneButton);
    const doneImg = document.createElement("img");
    doneImg.classList.add("imgdonebutton");
    doneButton.append(doneImg);
    doneImg.src = "/Project to do list/assets/check.svg";
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
    imgDel.classList.add("imgdelbutton");
    delButton.append(imgDel);
    imgDel.src = "/Project to do list/assets/trash.svg";

    delButton.addEventListener("click", function () {
      toDoItem.remove();
    });

    doneButton.addEventListener("click", function () {
      toDoItem.remove();
      doneList = doneList + 1;
      doneCount.textContent = doneList;
      console.log(doneList);
    });
  }
});
