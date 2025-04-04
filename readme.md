# template.js
simple and minimal templating in javascript.

**methods:**
- `include(path, data = {})` includes the template from `path`, optionally with variables accessible with `data.VARNAME`
- `text(js)` renders the javascript result in the current script element

## example
**index.html**
```html
<html>
    <head>
        <script src="template.js"></script>
    </head>
    <body>
        <script>
            include("header.html", { title: "Hello World!", date: "2025-04-23" })
        </script>
    </body>
</html>
```

**header.html**
```html
<header>
    <h1><script>text(data.title)</script></h1>
    <p><script>text(data.date)</script></p>
</header>
```

final output:
```html
<html>
    <head>
        <script src="template.js"></script>
    </head>
    <body>
        <header>
            <h1>Hello World!</h1>
            <p>2025-04-23</p>
        </header>
    </body>
</html>
```

_**note**: it's possible to use the `<tjs>` tag instead of `<script>` because why not._  

## installation/usage
- download/clone and import with `<script src="template.js"></script>`
- or use a cdn like `<script src="https://cdn.jsdelivr.net/gh/benstigsen/template.js/template.min.js"></script>`

## questions
### what if i want to include css?
use the standard css `@import` rule:
```html
<style>@import url('style.css');</style>
```

