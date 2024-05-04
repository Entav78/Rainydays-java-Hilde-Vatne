



export class loader {
    constructor(html, css) {
        this.html = html;
        this.css = css;
    }

    inject() {
        const style = document.createElement('style');
        style.innerHTML = this.css;
        document.head.appendChild(style);

        const div = document.createElement('div');
        div.innerHTML = this.html;
        document.body.appendChild(div);
    }

    remove() {
        const loaderElement = document.querySelector('.loader');
        if (loaderElement) {
            loaderElement.remove();
        }
    }
}