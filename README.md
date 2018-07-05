# ZJS
Mini JS helper that I use when I dont want include Jquery

To minify JS, use one of minifiers from Google: [Javascript Minifiers](https://www.google.com/search?q=javascript+minifier)

## Basic usage

### Find set of elements
```
Z.findAll('a')
```
@return array with instanses of Z

### Find single element
```
Z.find('body')
// or
Z.findOne('body')
```
@return instanse of Z

### Find single element and get its length
```
Z.find('body').el.length
```
@return array with instanses of Z OR empty array if not found

### Get attribute of the element
```
Z.find('meta[name="description"]').attr('content')
```
@return string OR null if attribute not found

### Set attribute of the element
```
Z.find('meta[name="description"]').attr('content', 'Hello world')
```
@return instanse of Z

### Add single event listener
```
z.find('body').on('click', function(){alert('yo');})
```
@return instanse of Z

### Add multiple event listeners
```
z.find('body').on('click blur', function(){alert('yo');})
```
@return instanse of Z

### Add, Remove, Toggle and Check Class
```
Z.find('body').addClass('main');
Z.find('body').removeClass('main');
Z.find('body').toggleClass('main');
```
@return instanse of Z

```
if (Z.find('body').hasClass('main')) {
alert('yo');
}
```
@return bool

### Append html
```
Z.find('body').append('<strong style="color:red;">Hello world</strong>');
```
@return instanse of Z

### Prepend html
```
Z.find('body').prepend('<strong style="color:red;">Hello world</strong>');
```
@return instanse of Z


### Get inner HTML
```
Z.find('body').html();
```
@return string

### Set inner HTML
```
Z.find('body').html('<strong style="color:red;">Hello world</strong>');
```
@return instanse of Z

### Get inner Text
```
Z.find('body').text();
```
@return string

### Set inner Text
```
Z.find('body').text('<strong style="color:red;">Hello world</strong>');
```
@return instanse of Z
Set only text so the body will contain text without "div" tag, only "Hello world"

### Create element by tagName
```
var div = Z.create('div')
```
@return instanse of Z

### DOM ready event
```
Z.ready(function(){
  console.log('DOM Ready');
});
```
if you need some pause after DOM loaded, pass micrseconds as second parameter
```
Z.ready(function(){
  console.log('DOM Ready and 3 seconds pass');
}, 3000);
```

## More complex examples

### Create element with a text and append it to body
```
var div = Z.create('div').html('<strong style="color:red;">Hello world</strong>');
Z.find('body').append(div.html());
```
@return instanse of Z

### Append styles to header
```
var css = 'body{background-color:red;}';
Z.find('head').el.appendChild(Z.create('style').attr('type','text/css').append(css).el);
```
@return instanse of Z
