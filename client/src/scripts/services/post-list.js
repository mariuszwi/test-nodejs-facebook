export function fetchPostList() {
    fetch("/post-list.json")
    .then((response) => {
        return response.json();
    })
    .then((postList) => {
        console.log(postList);
    });
}
