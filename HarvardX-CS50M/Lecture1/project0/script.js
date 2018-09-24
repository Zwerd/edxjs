const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count').innerHTML
const uncheckedCountSpan = document.getElementById('unchecked-count').innerHTML

function newTodo() {
  alert('New TODO button clicked!')
  console.log(list,itemCountSpan,uncheckedCountSpan)
}
