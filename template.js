var data = {};

function include(path, _data = {}) {
    let script = document.currentScript;

    data = _data;
    fetch(path)
        .then(response => response.text())
        .then(content => {
            // looks crazy but trust me, inserting html fragments which include <script> tags is a process.
            // by doing what we do here, we can insert the html fragment and make sure the <script> tags are executed.
            template = document.createElement("template");
            template.innerHTML = content;
            let html = template.content.cloneNode(true);

            html.querySelectorAll("script, tjs").forEach(oldScript => {
                const newScript = document.createElement("script");
                if (oldScript.src) {
                    newScript.src = oldScript.src;
                } else {
                    newScript.textContent = oldScript.textContent;
                }
                oldScript.replaceWith(newScript);
            });

            script.replaceWith(html);
        })
        .catch(error => console.error(error));
}

function text(content) {
    document.currentScript.outerHTML = content;
}
