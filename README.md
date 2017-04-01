Accordion.js
================

Accordion.js is a lightweight and simple plugin based on jQuery. [Try out the demo](//joaomosantos.github.io/accordion.js).

Supports IE7+ and modern browsers and Support jQuery version >= 1.7.x.

#### Package Manager

```sh
# Bower
bower install --save accordion-js
```

### Usage

```javascript
$('.accordion').accordion();
```

### Settings

Name             | Default                    | Type    | Description
:----------------|:---------------------------|:--------|:-----------
controlElement   | `$('.accordion-control')`  | element | Element that will act as a button.      
contentElement   | `$('.accordion-content')`  | element | Element that contains hide/show content.
transitionSpeed  | `400`                      | int     | Transition speed on miliseconds.
ease             | `swing`                    | string  | The type of "easing" to use during transitions.
multipleCollapse | `true`                     | boolean | Element that contains hide/show content.

### Callbacks

Name        | Type            | Description
:-----------|:----------------|:-----------
onOpened    | function(el) {} | Executes immediately after the accordion is fully opened.      
onClosed    | function(el) {} | Executes immediately after the accordion is fully closed.

### Sample Structure

For a simple accordion/dropdown, use the following structure:

```html
<div class="accordion">
  <div class="accordion-control">...</div>
	<div class="accordion-content">
    // content
		// content
	</div>
</div>
```
Example usage javascript:

```js
  $('.accordion').accordion({
    controlElement: element,
    contentElement: element,
    transitionSpeed: int, 
    ease: string,
    multipleCollapse: boolean,
    onOpened: function(el) { 
      console.log(el); 
    },
    onClosed: function(el) { 
      console.log(el); 
    }
  });
```