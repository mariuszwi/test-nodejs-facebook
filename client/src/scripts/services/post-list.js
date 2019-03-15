function fetchPostList() {
    return fetch('/posts')
        .then((response) => {
            return response.json();
        });
}

module.exports = {
    fetchPostList
}