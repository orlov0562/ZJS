# ZJS
Mini JS helper that I use when I dont want include Jquery

## Basic usage

### Find set of elements
@return array with instanses of Z
```
Z.findAll('body')
```

### Find single element
@return instanse of Z
```
Z.find('body')
// or
Z.findOne('body')
```

### Find single element and get its length
@return array with instanses of Z OR empty array if not found
```
Z.find('body').el.length
```

### Get attribute of the element
@return string OR null if attribute not found
```
Z.find('meta[name="description"]').attr('content')
```

### Set attribute of the element
@return instanse of Z
```
Z.find('meta[name="description"]').attr('content', 'Hello world')
```

### Add single event listener
@return instanse of Z
```
z.find('body').on('click', function(){alert('yo');})
```

### Add multiple event listeners
@return instanse of Z
```
z.find('body').on('click blur', function(){alert('yo');})
```

### Add, Remove, Toggle and Check Class
@return instanse of Z
```
Z.find('body').addClass('main');
Z.find('body').removeClass('main');
Z.find('body').toggleClass('main');
```

@return bool
```
if (Z.find('body').hasClass('main')) {
alert('yo');
}
```

### Append html
@return instanse of Z
```
Z.find('body').append('<strong style="color:red;">Hello world</strong>');
```

### Get inner HTML
@return string
```
Z.find('body').html();
```

### Set inner HTML
@return instanse of Z
```
Z.find('body').html('<strong style="color:red;">Hello world</strong>');
```

### Get inner Text
@return string
```
Z.find('body').text();
```

### Set inner Text
@return instanse of Z
```
Z.find('body').text('<strong style="color:red;">Hello world</strong>');
```
Set only text so the body will contain text without "div" tag, only "Hello world"

### Create element by tagName
@return instanse of Z
```
var div = Z.create('div')
```

## More complex examples

### Create element with a text and add it to body
@return instanse of Z
```
var div = Z.create('div').append('<strong style="color:red;">Hello world</strong>');
Z.find(body).append(div.el.innerHtml);
```

### Append styles to header
```
var css = 'body{background-color:red;}';
Z.find('head').el.appendChild(Z.create('style').attr('type','text/css').append(css).el);
```
