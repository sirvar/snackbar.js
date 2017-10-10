![alt tag](images/logo.png)
snackbar.js is a jQuery plugin that replicates Google's Material Design snackbar. It gives you full control over how it looks and how it behaves.

### [Demo](http://sirvar.github.io/snackbar.js/demo/)

## Usage
Include jQuery and jQuery UI in your project.
```html
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
```
Also include `snackbar` in your project.
```html
<link rel="stylesheet" href="/lib/snackbar.css">
<script src="lib/snackbar.js"></script>
```
To apply the snackbar to an element, use:
```javascript
$("#element").snackbar();
```

## Example
```javascript
$("body").snackbar();
```
results in

![alt tag](images/simple.png)

## Options
These are the defaults but can be changed to anything you want
```javascript
{
  primary: "#FFFFFF",
  accent: "#EFFC0A",
  duration: 3,
  message: "This is a snackbar. (snackbar.js)",
  optionText: "",
  swipe: false
  callback: function(){}
}
```

### Details
| Option      | Description   |
|:-----------:|:-------------:|
| primary | Primary text color |
| accent | Option text color |
| duration | In seconds |
| message | Snackbar content |
| optionText | Text for option (if any) |
| swipe | Swipe to dismiss (does not dismiss in specified duration if true) |
| callback | Function to call on option click |
