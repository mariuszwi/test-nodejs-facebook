function fetchPostList() {
    return fetch("http://localhost:3000")
    .then((response) => {
        return response.json();
    })
}

module.exports = {
    fetchPostList
}