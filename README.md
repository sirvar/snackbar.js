# snackbar.js
snackbar.js is a jQuery plugin that replicates Google's Material Design snackbar. It gives you full control over how it looks and how it behaves.

## Usage
Include jQuery and jQuery UI in your project.
```html
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
```
Also include `snackbar.js` in your project.
```html
<script src="snackbar.js"></script>
```
To apply the snackbar to an element, use:
```javascript
$("#element").snackbar();
```

## Example
```javascript
$("body").snackbar();
```
will produce
