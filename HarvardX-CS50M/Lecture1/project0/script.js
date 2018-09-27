const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const itemList = []
let checkedNumber = parseInt(0)
let item,itemsNumber,element;


function newTodo() {
  item = prompt("Enter TODO for your list: ")
  itemList.push(item)
  itemsNumber = parseInt(itemList.length)
  element = '<li type="checkbox" id="'+item
            +'"name="TODO" value="'+item
            +'"onClick="changeColor(this)">'+item
            +'</li>'
  list.innerHTML += element
  itemCountSpan.innerHTML = itemsNumber
  uncheckedCountSpan.innerHTML = itemsNumber - checkedNumber
  document.getElementById(item).style.backgroundColor = 'red'
}


function changeColor(element) {
  console.log(element.style.backgroundColor)
  if(element.style.backgroundColor == 'red'){
    element.style.backgroundColor = 'green'
    checkedNumber += parseInt(1)
    console.log('check')
  }else{
    element.style.backgroundColor = 'red'
    checkedNumber -= parseInt(1)
  }
  uncheckedCountSpan.innerHTML = itemsNumber - checkedNumber
}
function removeItem(item){
  var ul = document.getElementById("todo-list");
  var element = document.getElementById(item);
  ul.removeChild(element);
}
