var url = 'https://api.vschool.io/alex/todo/';
var tasksDiv,
    doneDiv;

var HTML = `<div class="main-wrapper">
                <div class="tasks-section">
                    <h1>Tasks</h1>
                    <div id="todos"></div>
                </div>
                <div class="done-section">
                    <h1>Done</h1>
                    <div id="done-todos"></div>
                </div>
            </div>`;

function addTodoFormHTML() {
    var todoFormHTML = `<form name="todoForm">
                            <input name="todoForm__title" placeholder="Title" required>
                            <textarea type="text" name="todoForm__description" placeholder="Description"></textarea>
                            <input name="todoForm__price" placeholder="$$$">
                            <input name="todoForm__imgUrl" placeholder="Image URL">
                            <button id="todoFormBtn">Add Task</button>
                        </form>`;
    var todoFormContainer = document.createElement('div');
    todoFormContainer.id = 'todo-form-wrapper';
    todoFormContainer.innerHTML = todoFormHTML;
    return todoFormContainer;
}

function createSkeletonHTML() {
    
    // Add main-wrapper div
    var mainWrapper = document.createElement('div');
    mainWrapper.classList.add('main-wrapper');
    
    // Add task-section div
    var tasksSection = document.createElement('div');
    var h1 = document.createElement('h1');
    var text = document.createTextNode('Tasks');
    h1.appendChild(text);
    var todos = document.createElement('div');
    todos.id = 'todos';
    tasksSection.classList.add('tasks-section');
    tasksSection.appendChild(h1);
    tasksSection.appendChild(todos);
    
    // Add done-section div
    var doneSection = document.createElement('div');
    var h1 = document.createElement('h1');
    var text = document.createTextNode('Done');
    h1.appendChild(text);
    var doneTodos = document.createElement('div');
    doneTodos.id = 'done-todos';
    doneSection.classList.add('done-section');
    doneSection.appendChild(h1);
    doneSection.appendChild(doneTodos);

    // Add todo form
    var todoFormHTML = addTodoFormHTML();

    // Add button
    var addBtn = document.createElement('div');
    addBtn.innerHTML = '<i class="material-icons">add</i>';
    addBtn.classList.add('add-btn');
    todoFormHTML.style.display = 'none';
    addBtn.addEventListener('click', function() {
        if (todoFormHTML.style.display == 'none') {
            todoFormHTML.style.display = 'block';
        } else {
            todoFormHTML.style.display = 'none';
        }
    });
    
    // Create variables to use later
    tasksDiv = todos;
    doneDiv = doneTodos;
    
    // Add sections to main-wrapper
    mainWrapper.appendChild(tasksSection);
    mainWrapper.appendChild(doneSection);
    mainWrapper.appendChild(todoFormHTML);
    mainWrapper.appendChild(addBtn);
    
    return mainWrapper;
    
}

function createTodosHTML(todos) {

    // NEEDED VARIABLES
    var todoHTML = ''; 
    var doneTodoHTML = '';
    HTML = createSkeletonHTML();

    // INSERT TODO ITEMS
    todos.map(function(todo) {
        function addNonSpecificInfo() {
            var tempString = '';
            tempString += `<div class="title-and-price">`
            tempString += `<p class="title">${todo.title}</p>`;
            if (todo.price) {
                tempString += `<span class="price-dot"></span><p class="title">${todo.price}</p>`;
            }
            tempString += `</div>`;
    
            tempString += `<div class="todo-details">`;
            if (todo.description) {
                tempString += `<p class="description">${todo.description}</p>`;
            }
            if (todo.imgUrl) {
                tempString += `<div class="image" style="background: url(${todo.imgUrl})"></div>`;
            }
            tempString += `</div>`;
            tempString += '</div>';
            return tempString;
        }
        if (todo.completed) {
            doneTodoHTML += `<div class="todo" id="${todo._id}">`;
            doneTodoHTML += `<input type="checkbox" checked="true"><span class="checkmark"></span>`;
            doneTodoHTML += addNonSpecificInfo();
            // doneDiv was defined in createSkeletonHTML
            doneDiv.innerHTML = doneTodoHTML;
        } else {
            todoHTML += `<div class="todo" id="${todo._id}">`;
            todoHTML += `<input type="checkbox"><span class="checkmark"></span>`;
            todoHTML += addNonSpecificInfo();
            // tasksDiv was defined in createSkeletonHTML
            tasksDiv.innerHTML = todoHTML;
        }
    });
    document.body.appendChild(HTML);

    // POST FUNCTIONALITY
    document.todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var newTodo = {
            title: document.todoForm.todoForm__title.value
        };
        if (document.todoForm.todoForm__description.value) {
            newTodo.description = document.todoForm.todoForm__description.value;
        }
        if (document.todoForm.todoForm__price.value) {
            newTodo.price = document.todoForm.todoForm__price.value;
        }
        if (document.todoForm.todoForm__imgUrl.value) {
            newTodo.imgUrl = document.todoForm.todoForm__imgUrl.value;
        }
        console.log(newTodo);
        axios.post(url, newTodo).then(function(response) {
            console.log(response);
        });
    });

    // EXPANDABLE/COLLAPSABLE FUNCTIONALITY
    // Add collapse/expand functionality by clicking titles
    // I add the event listeners in for loop
    var titles = document.getElementsByClassName('title-and-price');
    for (var i = 0; i < titles.length; i++) {
        if (titles[i].nextElementSibling) {
            // Sets the initial value to none, so you only have to click once when page loads
            titles[i].nextElementSibling.style.display = 'none';
            titles[i].addEventListener('click', function(e) {
                // This was kind of clever or at least it felt like it
                if (e.target.classList[0] === 'title') {
                    var detailsElem = e.path[1].nextElementSibling;
                    if (detailsElem.style.display === 'none') {
                        detailsElem.style.display = 'block';
                    } else {
                        detailsElem.style.display = 'none';
                    }
                } else if (e.target.classList[0] === 'title-and-price') {
                    var detailsElem = e.path[0].nextElementSibling;
                    if (detailsElem.style.display === 'none') {
                        detailsElem.style.display = 'block';
                    } else {
                        detailsElem.style.display = 'none';
                    }
                }
            });
        }
    }

}

axios.get(url).then(function(response) {
    createTodosHTML(response.data);

    // UPDATE COMPLETED
    var checkboxes = document.querySelectorAll('.todo input');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('click', function(e) {
            var id = e.path[1].id;
            axios.put(url + id, {completed: e.target.checked}).then(function(response) {
                console.log(response.data);
            });

            // MOVE ITEMS FROM DONE TO TASKS AND VICE VERSA
            if (e.target.checked) {
                var waitIntervel = setTimeout(function() {
                    console.log(e.path[1]);
                    document.getElementById('done-todos').appendChild(e.path[1]);
                }, 2000);
            } else if (!e.target.checked) {
                var waitIntervel = setTimeout(function() {
                    console.log(e.path[1]);
                    document.getElementById('todos').appendChild(e.path[1]);
                }, 2000);
            }

        })
    }

    // ADD X TO TODOS
    var todoElems = document.querySelectorAll('.todo');
    for (var i = 0; i < todoElems.length; i++) {
        var deleteBtn = document.createElement('div');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = '<i class="material-icons">clear</i>';
        todoElems[i].childNodes[3].appendChild(deleteBtn);
    }

    // DELETE ITEMS
    var deleteBtns = document.querySelectorAll('.delete-btn');
    for (var i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', function(e) {
            console.log(e.path[3].id);
            var id = e.path[3].id;
            axios.delete(url + id).then(function(response) {
                console.log(response.data);
            });
        });
    }

});