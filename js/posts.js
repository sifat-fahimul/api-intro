function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => userPost(data))
}
getPost()

function userPost(posts) {
    const postContainer = document.getElementById('post')
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h2> ${post.title}</h2>
        <p>${post.body}</p>
        `
        postContainer.appendChild(div)
    }
}