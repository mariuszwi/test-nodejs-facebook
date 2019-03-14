class Component {
    $element = null;

    compile(template){
        const document = new DOMParser().parseFromString(
            template,
            "text/html"
        );

        return document.body.firstChild;
    }
}

module.exports = {
    Component
};