var url = 'https://api.vschool.io/alex/todo/';

var todoDiv = document.getElementById('todos');

axios.get(url).then(function(response) {
    var todos = response.data;
    var todoHTML = ''; 
    for (var todo in todos) {
        todo = todos[todo];
        todoHTML += '<div>';
        todoHTML += `<h2>${todo.title}</h2>`;
        todoHTML += `<p>${todo.completed}</p>`;
        if (todo.price) {
            todoHTML += `<p>${todo.price}</p>`;
        }
        if (todo.description) {
            todoHTML += `<p>${todo.description}</p>`;
        }
        if (todo.imgUrl) {
            todoHTML += `<img src=${todo.imgUrl}>`;
        }
        todoHTML += '</div>';
    }
    todoDiv.innerHTML = todoHTML;
});