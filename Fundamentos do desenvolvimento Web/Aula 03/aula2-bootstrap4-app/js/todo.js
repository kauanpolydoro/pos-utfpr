const addButton = document.getElementById('add');
const todoList = document.getElementById('todo');

addButton.addEventListener('click', addTodo);

function addTodo()
{
  const div = createRow();
  todoList.appendChild(div)
}

function createRow()
{
  const div = document.createElement('div');
  div.classList.add('row');
  div.classList.add('mx-0');

  div.innerHTML += `
    <div class="d-flex w-100 mb-2">
      <div class="input-group flex-grow-1">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input type="checkbox">
          </div>
        </div>
        <input type="text" class="form-control">
      </div>
      <div>
        <button id="restart" type="button" class="btn btn-block btn-danger ml-1">
          <i class="bi bi-trash-fill"></i>
        </button>
      </div>
    </div>
  `;

  const checkbox = div.querySelector('input[type="checkbox"]');
  const input = div.querySelector('input[type="text"]');
  const button = div.querySelector('button');

  checkbox.addEventListener('change', handlerCheck)
  button.addEventListener('click', handlerDelete)

  function handlerCheck(event)
  {
    input.disabled = event.target.checked;
  }

  function handlerDelete()
  {
    div.remove();
  }

  return div;
}


