# include.js
simple and minimal include in javascript.

## example
**index.html**
```html
<html>
    <head>
        <script defer src="include.js"></script>
    </head>
    <body>
        <x-include src="header.html" data-title="Hello World!">Loading...</x-include>
    </body>
</html>
```

**header.html**
```html
<header>
    <h1><script>text(data.title)</script></h1>
</header>
```

final output:
```html
<html>
    <head>
        <script defer src="include.js"></script>
    </head>
    <body>
        <header>
            <h1>Hello World!</h1>
        </header>
    </body>
</html>
```

## installation/usage
- download/clone and import with `<script defer src="include.js"></script>`
- or use a cdn like `<script defer src="https://cdn.jsdelivr.net/gh/benstigsen/include.js/include.min.js"></script>`


