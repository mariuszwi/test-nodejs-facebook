const { Component } = require('./component');
const { MenuComponent } = require('./menu');
const { PostList } = require('./post-list');

class RootComponent extends Component{
    template = `
        <div class="root"></div>
    `;

    render($holder){
        this.$element = this.compile(this.template);

        const m = new MenuComponent;
        const p = new PostList;

        m.render(this.$element);
        p.render(this.$element);
        $holder.appendChild(this.$element);
    };

}

module.exports = {
    RootComponent
};
