function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data))
}
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
}
function displayUser(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        // console.log(user.name)
        const li = document.createElement('li');
        li.innerText = `name: ${user.name}  Email: ${user.email}`;
        ul.appendChild(li);
    }
}