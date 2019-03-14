const { Component } = require('./component');

class MenuComponent extends Component {
    $element = null;
    template = `
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Gallery</a></li>
            <li><a href="/">Kontakt</a></li>
        </ul>
    </nav>`

    render($holder){
        this.$element = this.compile(this.template);
        $holder.appendChild(this.$element);
    };
}

module.exports = {
    MenuComponent
};