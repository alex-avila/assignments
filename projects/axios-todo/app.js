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
    
    // Create variables to use later
    tasksDiv = todos;
    doneDiv = doneTodos;
    
    // Add sections to main-wrapper
    mainWrapper.appendChild(tasksSection);
    mainWrapper.appendChild(doneSection);
    
    return mainWrapper;
    
}

async function getTodos() {
    var response = await axios.get(url);
    return response.data;
}

async function createTodosHTML() {
    
    function addNonSpecificInfo() {
        var tempString = '';
        tempString += `<div class="title-and-price">`
        tempString += `<p class="title">${todo.title}</p>`;
        if (todo.price) {
            tempString += `<span class="price-dot"></span><p class="title">${todo.price}</p>`;
        }
        tempString += `</div>`;

        if (todo.description || todo.imgUrl) {
            tempString += `<div class="todo-details">`;
            if (todo.description) {
                tempString += `<p class="description">${todo.description}</p>`;
            }
            if (todo.imgUrl) {
                tempString += `<div class="image" style="background: url(${todo.imgUrl})"></div>`;
            }
            tempString += `</div>`;
        }
        tempString += '</div>';
        return tempString;
    }
    
    var todos = await getTodos();
    var todoHTML = ''; 
    var doneTodoHTML = '';
    HTML = createSkeletonHTML();
    for (var todo in todos) {
        todo = todos[todo];
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
    }
    document.body.appendChild(HTML);
    var titles = document.getElementsByClassName('title-and-price');
    for (var i = 0; i < titles.length + 1; i++) {
        if (titles[i].nextElementSibling) {
            // Sets the initial value to none, so you only have to click once when page loads
            titles[i].nextElementSibling.style.display = 'none';
            titles[i].addEventListener('click', function(e) {
            // This was kind of clever or at least it felt like it
            var detailsElem = e.path[1].nextElementSibling;
            if (detailsElem.style.display === 'none') {
                detailsElem.style.display = 'block';
            } else {
                detailsElem.style.display = 'none';
            }
        });
        }
    }
}

createTodosHTML();