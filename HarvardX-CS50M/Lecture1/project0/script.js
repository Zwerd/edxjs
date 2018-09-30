const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let todoName = 'task';
let todoUncheck = []
let todoList = []
let todoText = String()
let newelement = ''
let todoNumber = 0

function newTodo() {
  todoNumber += 1;
  todoTask = todoName + todoNumber;
  todoList.push(todoTask);
  todoUncheck.push(todoTask);
  todoText = prompt("Please enter your task in TODO list: ");
  newelement = '<button id="delete'+todoTask+'" onclick="remove(this)">Delete</button>'
               +'<li id="'+todoTask+'" onclick="changeColor(this)">'+todoText+'</li>'
  itemCountSpan.innerHTML = todoList.length
  uncheckedCountSpan.innerHTML = todoUncheck.length
  list.innerHTML += newelement
  document.getElementById(todoTask).style.backgroundColor = 'red'
  console.log(todoUncheck)
}
function remove(element){
  let id = element.id.slice(6, element.id.langth)
  list.removeChild(element)
  list.removeChild(document.getElementById(id))
  todoList.pop(0,todoList.indexOf(id)+1)
  checkIndex(element)
  console.log(todoUncheck)
  itemCountSpan.innerHTML = todoList.length
  uncheckedCountSpan.innerHTML = todoUncheck.length
}
function changeColor(element){
  if(element.style.backgroundColor == 'red'){
    element.style.backgroundColor = 'green'
    todoUncheck.pop(0,todoUncheck.indexOf(element.id)+1)
    uncheckedCountSpan.innerHTML = todoUncheck.length
    console.log(todoUncheck)
  }else{
    element.style.backgroundColor = 'red'
    todoUncheck.push(element.id)
    uncheckedCountSpan.innerHTML = todoUncheck.length
    console.log(todoUncheck)
  }
}
function checkIndex(element){
  if(!todoUncheck.indexOf(element.id)+1 <= 0){
    todoUncheck.pop(0,todoUncheck.indexOf(element.id)+1)
    console.log(todoUncheck)
  }else{

  }
}
