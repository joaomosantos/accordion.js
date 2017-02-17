Accordion.js
================

Accordion.js is a lightweight and simple plugin based on jQuery. [Try out the demo](//joaomosantos.github.io/accordion.js).

Supports IE7+ and modern browsers.
Support jQuery version >= 1.7.x.

#### Package Managers

```sh
# Bower
bower install --save accordion-js
```

### Usage

```javascript
$('.accordion').accordion();
```

### Options

Name             | Default                    | Type    | Description
:----------------|:---------------------------|:--------|:-----------
transitionSpeed  | `400`                      | int     | Transition speed on miliseconds.
controlElement   | `'$('.accordion-control')'`| string  | Element that will act as a button.      
contentElement   | `'$('.accordion-content')'`| string  | Element that contains hide/show content.

### Sample Structure

For a simple accordion/dropdown, use the following structure:

```html
<div class="accordion">
	<div class="accordion-control">...</div>
	<div class="accordion-content">
		...
		...
	</div>
</div>
<div class="accordion">
	<div class="accordion-control">...</div>
	<div class="accordion-content">
		...
		...
	</div>
</div>
```
or

```javascript
$('#accordion').accordion();
```

```html
<div id="accordion">
	<div class="accordion-control">...</div>
	<div class="accordion-content">
		...
		...
	</div>
	<div class="accordion-control">...</div>
	<div class="accordion-content">
		...
		...
	</div>
</div>
```