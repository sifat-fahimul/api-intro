function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => userComment(data))
}

loadComment()

function userComment(comments) {
    console.log(comments);
    const section = document.getElementById('comment');
    for (const comment of comments) {
        const div = document.createElement('div');

        div.innerHTML = `
        <h1> ${comment.name} </h1> 
        <h3>${comment.email}</h3>
        <p>${comment.body}</p>
        `
        section.appendChild(div)
    }
}