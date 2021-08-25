function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => userPosts(data))
}
getPost()
function userPosts(posts) {
    const section = document.getElementById('container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `
        div.classList.add('post')
        section.appendChild(div)

    }
}