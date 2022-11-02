//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo"); //The <select> element

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions
//1 Adding Items
function addTodo (event) {
   event.preventDefault();
   //Create Todo DIV
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText =todoInput.value;
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo); //Sticking newTodo(so the li) into todoDiv (so the div)
    //Check Mark Button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton);//Sticking button into div
    //Check Trash Button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton);//Sticking button into div
    //Append to UL
    todoList.appendChild(todoDiv);
    //Clear Input Value
    todoInput.value = '';
};
//2 Complete and delete item

function deleteCheck (e) {
    const item = e.target; //e is the click, target what we click on and that is saved in const item
    if (item.classList.contains ('trash-btn')) {
        const todo = item.parentElement; 
        
        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){ //transitionend: When tranisition ends, todo will be removed
        todo.remove();  //Removes the parent of trash-btn. That is the tododiv. See 45.    
        })
    }
    if (item.classList.contains ('complete-btn')) {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
};

function filterTodo (e) {
    const todos = todoList.childNodes; //todoList is the UL element

    todos.forEach(function(todo) {
        switch(e.target.value) {  //If we click on <option> "all", then "all" is the value
            case "all":  //If we click on all, we want to show all todos. However. They are already visible
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains ('completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains ('completed')){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }

    });
};