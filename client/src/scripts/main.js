const { fetchPostList } = require('./services/post-list.js');
const { RootComponent } = require('./components/root');


// fetchPostList();

function bootstrap() {
    const $page = document.querySelector("#page");
    const c = new RootComponent();
    c.render($page);
}

window.addEventListener("load", bootstrap);
