const { Post } = require('./post');
const { fetchPostList } = require('../services/post-list');

class PostList extends Post {
    $element = null;
    template = `<div class="post-list"></div>`;

    render($holder){
        this.$element = this.compile(this.template);

        const postList = fetchPostList();
        postList.then((list) => {
            console.dir(list);
            list.forEach((post)=> {
                const postEl = new Post;
                postEl.setTemplateData(post.title, post.text);
                postEl.render(this.$element);
            });
            $holder.appendChild(this.$element);
        });
    };
}

module.exports = {
    PostList
};