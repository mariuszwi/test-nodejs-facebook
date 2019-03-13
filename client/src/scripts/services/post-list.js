export function fetchPostList() {
    fetch("http://localhost:3000")
    .then((response) => {
        return response.json();
    })
    .then((postList) => {
        console.log(postList);
    });
}
