
/*
import html from './loader.html';
import css from './loader.css';


export class loader {
    inject() {
        const style = document.createElement('style');
        style.innerHTML = css;
        document.head.appendChild(style);

        const div = document.createElement('div');
        div.innerHTML = html;
        document.body.appendChild(div);
    }
}
*/



export class loader {
    constructor(html, css) {
        this.html = html;  // Set HTML content
        this.css = css;    // Set CSS styles
    }

    inject() {
        const style = document.createElement('style');
        style.innerHTML = this.css;
        document.head.appendChild(style);

        const div = document.createElement('div');
        div.innerHTML = this.html;
        document.body.appendChild(div);
    }

    // Optionally, add a method to remove the loader from the DOM
    remove() {
        const loaderElement = document.querySelector('.loader');
        if (loaderElement) {
            loaderElement.remove();
        }
    }
}