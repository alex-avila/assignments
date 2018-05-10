

var url = 'https://api.vschool.io/alex/todo/';

var skeletonHTML = '<div class="tasks-section"><h1>Tasks</h1>' +
    '<div id="todos"></div></div><div class="done-section"><h1>Done</h1>' +
    '<div id="done-todos"></div></div>';
var isLoad = true;
var isUpdate = false;

function createStaticHTML() {

    function clearForm() {
        document.todoForm.title.value = '';
        document.todoForm.description.value = '';
        document.todoForm.price.value = '';
        document.todoForm.imgUrl.value = '';
    }

    // CREATE FORM
    var todoFormStr = `<form name="todoForm">
                            <input name="title" placeholder="Title" required>
                            <textarea type="text" name="description" placeholder="Description"></textarea>
                            <input name="price" placeholder="$$$">
                            <input name="imgUrl" placeholder="Image URL">
                            <button id="todoFormBtn">Add Task</button>
                        </form>`;
    var todoFormContainer = document.createElement('div');
    todoFormContainer.id = 'todo-form-wrapper';
    todoFormContainer.innerHTML = todoFormStr;

    // CREATE ACTION BUTTON
    var addBtn = document.createElement('div');
    addBtn.innerHTML = '<i class="material-icons">add</i>';
    addBtn.classList.add('add-btn');
    todoFormContainer.style.display = 'none';
    addBtn.addEventListener('click', function () {
        todoFormContainer = document.getElementById('todo-form-wrapper');
        // var todoFormBtn = todoFormContainer.children[0].children[4];
        todoFormBtn.textContent = 'Add Task';
        isUpdate = false;
        if (todoFormContainer.style.display == 'none') {
            todoFormContainer.style.display = 'block';
        } else {
            todoFormContainer.style.display = 'none';
            clearForm();
        }
    });

    return [todoFormContainer, addBtn];
}

function createAPIDataHTML(data) {

    var mainWrapper;
    if (document.getElementsByClassName('main-wrapper')[0]) {
        mainWrapper = document.getElementsByClassName('main-wrapper');
        mainWrapper.innerHTML = '';
        mainWrapper = mainWrapper[0]
    } else {
        mainWrapper = document.createElement('div');
        mainWrapper.classList.add('main-wrapper');
    }

    mainWrapper.innerHTML = skeletonHTML;
    var tasksContainer = mainWrapper.childNodes[0].childNodes[1];
    var doneContainer = mainWrapper.children[1].children[1];

    data.map(item => {
        var todoStr = '';
        todoStr += `<div class="todo" id="${item._id}">`;
        if (item.completed) {
            todoStr += '<input type="checkbox" checked="true"><span class="checkmark"></span>';
        } else {
            todoStr += '<input type="checkbox"><span class="checkmark"></span>';
        }
        todoStr += '<div class="title-and-price">';
        todoStr += `<p class="title">${item.title}`;
        if (item.price) {
            todoStr += `<span class="price-dot"></span><p class="price">${item.price}</p>`;
        }
        todoStr += `</div>`;
        todoStr += `<div class="todo-details">`;
        if (item.description) {
            todoStr += `<p class="description">${item.description}</p>`;
        }
        if (item.imgUrl) {
            todoStr += `<div class="image" style="background: url(${item.imgUrl})"></div>`;
        }
        todoStr += `</div>`;
        todoStr += '</div>';
        if (!item.completed) {
            tasksContainer.innerHTML += todoStr;
        } else if (item.completed) {
            doneContainer.innerHTML += todoStr;
        }
    });

    // MAKE TODO INFOR EXPANDABLE AND COLLAPSABLE
    var titles = [];
    for (var i = 0; i < mainWrapper.childNodes.length; i++) {
        var arr = mainWrapper.childNodes[i].childNodes[1].childNodes;
        for (var j = 0; j < arr.length; j++) {
            titles.push(arr[j].childNodes[2]);
        }
    };
    for (var i = 0; i < titles.length; i++) {
        if (titles[i].nextElementSibling) {
            // Sets the initial value to none, so you only have to click once when page loads
            titles[i].nextElementSibling.style.display = 'none';
            titles[i].addEventListener('click', function (e) {
                // This was kind of clever or at least it felt like it
                if (e.target.classList[0] === 'title' || e.target.classList[0] === 'price') {
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

    // Add to body if it's first time opening or when refreshing site
    if (isLoad) {
        document.body.appendChild(mainWrapper);
        isLoad = false;
    }

    mainWrapper.appendChild(createStaticHTML()[0]);
    mainWrapper.appendChild(createStaticHTML()[1]);

}

function insertAPIDataHTML() {
    axios.get(url).then(function (response) {
        // Create HTML
        createAPIDataHTML(response.data);
        // ADD EVENT LISTENERS
        updateCompleted();
        addButtonsHTML();
        deleteTodo();
        editTodo();
        createOrUpdateTodo();
    });
}

function updateCompleted() {
    var checkboxes = document.querySelectorAll('.todo input');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('click', function (e) {
            var id = e.path[1].id;
            axios.put(url + id, {
                completed: e.target.checked
            }).then(function () {
                insertAPIDataHTML();
            });
        })
    }
}

function addButtonsHTML() {
    var todoElems = document.querySelectorAll('.todo');
    for (var i = 0; i < todoElems.length; i++) {
        var buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        var deleteBtn = document.createElement('span');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = '<i class="material-icons">clear</i>';

        var editBtn = document.createElement('span');
        editBtn.classList.add('edit-btn');
        editBtn.innerHTML = '<i class="material-icons">mode_edit</i>';

        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(deleteBtn);
        todoElems[i].childNodes[3].appendChild(buttonsDiv);
    }
}

function deleteTodo() {
    var deleteBtns = document.querySelectorAll('.delete-btn');
    for (var i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', function (e) {
            if (e.path.length === 12) {
                var id = e.path[4].id;
                console.log(id);
                axios.delete(url + id).then(function (response) {
                    insertAPIDataHTML();
                });
            } else if (e.path.length === 11) {
                var id = e.path[3].id;
                console.log(id);
                axios.delete(url + id).then(function (response) {
                    insertAPIDataHTML();
                });
            }
        });
    }
}

function editTodo() {

    function populateInputs(id) {
        axios.get(url + id).then(function (response) {
            var todos = response.data;
            document.todoForm.title.value = todos.title;
            if (todos.description) {
                document.todoForm.description.value = todos.description;
            }
            if (todos.price) {
                document.todoForm.price.value = todos.price;
            }
            if (todos.imgUrl) {
                document.todoForm.imgUrl.value = todos.imgUrl;
            }
            isUpdate = true;
            document.getElementById('todo-form-wrapper').style.display = 'block';
        });
    }

    var editBtns = document.querySelectorAll('.edit-btn');
    for (var i = 0; i < editBtns.length; i++) {
        editBtns[i].addEventListener('click', function (e) {
            document.getElementById('todoFormBtn').textContent = 'Update Task';
            if (e.path.length === 12) {
                idToUpdate = e.path[4].id;
                populateInputs(idToUpdate);
            } else if (e.path.length === 11) {
                idToUpdate = e.path[3].id;
                populateInputs(idToUpdate)
            }
        });
    }
}

function createOrUpdateTodo() {
    document.todoForm.addEventListener('submit', function (e) {

        e.preventDefault();

        var newTodo = {
            title: document.todoForm.title.value
        };

        if (document.todoForm.description.value) {
            newTodo.description = document.todoForm.description.value;
        }
        if (document.todoForm.price.value) {
            newTodo.price = document.todoForm.price.value;
        }
        if (document.todoForm.imgUrl.value) {
            newTodo.imgUrl = document.todoForm.imgUrl.value;
        }

        if (isUpdate) {
            axios.put(url + idToUpdate, newTodo).then(function (response) {
                insertAPIDataHTML();
            });
        } else {
            axios.post(url, newTodo).then(function () {
                insertAPIDataHTML();
            });
        }

    });
}

// When page first loads, create the html, then display it 
// then add all the event listeners that lead to axios requests
insertAPIDataHTML();