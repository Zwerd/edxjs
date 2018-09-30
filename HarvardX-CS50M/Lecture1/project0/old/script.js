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
let todonumber = 0

function newTodo() {
  todonumber += 1
  console.log(todonumber)
  item = prompt("Enter TODO for your list: ")
  itemList.push(item)
  itemsNumber = parseInt(itemList.length)
  element = '<button id="deletebutton" onclick="removeItem('+"'"+item + todonumber+"'"+')">Delete</button>'
            + '<li type="checkbox" id="'+item + todonumber
            +'"name="TODO" value="'+item + todonumber
            +'"onClick="changeColor(this)">'+item
            +'</li>'
  list.innerHTML += element
  itemCountSpan.innerHTML = itemsNumber
  uncheckedCountSpan.innerHTML = itemsNumber - checkedNumber
  document.getElementById(item+todonumber).style.backgroundColor = 'red'
}


function changeColor(item) {
  console.log(item.style.backgroundColor)
  if(item.style.backgroundColor == 'red'){
    item.style.backgroundColor = 'green'
    checkedNumber += parseInt(1)
    console.log('check')
  }else{
    item.style.backgroundColor = 'red'
    checkedNumber -= parseInt(1)
  }
  uncheckedCountSpan.innerHTML = itemsNumber - checkedNumber
}
function removeItem(item){
  item = '"' + item + '"'
  console.log("delete was clicked",item)
  var ul = document.getElementById("todo-list");
  ul.removeChild(item);
  itemList.splice(itemList.indexOf(item))
  console.log(itemList.indexOf(item))
  itemsNumber = parseInt(itemList.length)
  uncheckedCountSpan.innerHTML = itemsNumber
  console.log(itemsNumber,uncheckedCountSpan.innerHTML)

}
