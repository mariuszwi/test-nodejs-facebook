const { Component } = require('./component');

class Post extends Component {
    $element = null;


    template = ``;

    setTemplateData(title, text) {
        this.template = `
        <div class="post"><h5>` + title + `</h5>
            <p>` + text + `</p>
        </div>
        `;
    };

    render($holder){
        this.$element = this.compile(this.template);
        $holder.appendChild(this.$element);
    };
}

module.exports = {
    Post
};