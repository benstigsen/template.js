var data = {};

class XInclude extends HTMLElement {
    constructor() {
      super();
    }
}

customElements?.define("x-include", XInclude);

function text(content) {
    document.currentScript.outerHTML = content;
}

function include(element, path) {
    data = element.dataset;
    fetch(path)
        .then(response => response.text())
        .then(content => {
            // looks crazy but trust me, inserting html fragments which include <script> tags is a process.
            // by doing what we do here, we can insert the html fragment and make sure the <script> tags are executed.
            template = document.createElement("template");
            template.innerHTML = content;
            let html = template.content.cloneNode(true);

            html.querySelectorAll("script").forEach(oldScript => {
                const newScript = document.createElement("script");
                if (oldScript.src) {
                    newScript.src = oldScript.src;
                } else {
                    newScript.textContent = oldScript.textContent;
                }
                oldScript.replaceWith(newScript);
            });

            element.replaceWith(html);
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.getElementsByTagName("x-include");
    for (let element of elements) {
        const src = element.getAttribute("src");
        if (src) {
            include(element, src);
        }
    }
});