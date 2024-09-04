let todos = [];

const input = document.getElementById("toDo-text");
const todosDiv = document.querySelector(".todos")


if(localStorage.getItem('todos')){
    
    todos = JSON.parse(localStorage.getItem('todos'))
    generateTodos()
}

function submitList(e) {
    e.preventDefault()

    let todo = {
        data: input.value,
        status: false
    }

    todos.push(todo)

    input.value = '';

    addTodo();
    // localStorage.setItem(todos);
    
    console.log(todos);

}


function addTodo(e) {


    todosDiv.innerHTML = '';
    localStorage.setItem('todos', JSON.stringify(todos))


    todos.map((todo, index) => {


        let html = ` <div class="list">

        <form id="form${index}" class="editForm" onsubmit="editFormTodo(event)">
        
        <input id='checkbox${index}' ${todos[index].status && 'checked'} onclick="checkHandler(${index},event)" type="checkbox" name="" >
        <input class='editInput' type="text" ${todos[index].status && 'style= "text-decoration: line-through"'} required disabled value="${todo.data}" id="input${index}">

        <div class="btn">
                     <button type="submit"  class="editButton">
                            <img src="icon/edit.png" id="edit${index}"  alt="">
                     </button>

                     <button type="button" onclick="deleteTodo(${index})" class="editButton">
                            <img src="icon/close.png" alt="">
                     </button>
           
         </div>

        </form>
        </div>`



        todosDiv.innerHTML += html;

    })



}

function checkHandler(index, event) {


    let ischecked = event.target.checked;
    const input = document.getElementById(`input${index}`)


    if (!ischecked) {
        todos[index].status = false;
        input.style.textDecoration = "none"
    }
    else {
        todos[index].status = false;
        input.style.textDecoration = "line-through"

    }
    localStorage.setItem('todos', JSON.stringify(todos))

}

function deleteTodo(index) {
    todos.splice(index, 1)
    console.log(todos)
    addTodo();
}

function editFormTodo(event){

    let index = event.target.id.replace('form', '')
    event.preventDefault()
    
    const buttonImage = document.getElementById(`edit${index}`)
    const input = document.getElementById(`input${index}`)
    const isInputDisable = input.disabled
    console.log(buttonImage.innerHTML)

    if(isInputDisable){
        input.disabled = false
        input.style.borderBottom = '0.5px solid gray'
        // buttonImage.src = '/icon/save.png'
    }
    else{
        todos[index].todoValue = input.value
        input.disabled = true
        input.style.borderBottom = 'none'
        // buttonImage.src = '/icon/edit.png'
    }
    
    localStorage.setItem('todos', JSON.stringify(todos))
}