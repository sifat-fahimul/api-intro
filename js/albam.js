function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => userAlbum(data))
}
loadAlbum()
function userAlbum(albums) {
    const divContainer = document.getElementById('album')
    for (const album of albums) {
        const div = document.createElement('div')
        div.innerHTML = `
        <h1>${album.id}</h1>
        <h3>${album.title}</h3>
        `
        divContainer.appendChild(div)
    }
}