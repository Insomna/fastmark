# fastmark.js

## What is it?

*fastmark.js* is a plugin for creating simple dynamic elements based on data-attributes and your css.

*fastmark.js* help you to code your markup without being distracted by writing javascript

##How it works?

Init plugin by one command

`$('.controller').fastmark();`

Where *.controller* some your jQuery selector

Make controller  
For example:

`<button class="controller" data-selfclass="changed">Click click to add me class .changed</button>`

### You can:

1. Changed class of current-element
2. Changed HTML into current-element
3. Changed class of different element by event of this element

By default *fastmark.js* 

1. Change class of current element to '.active' and different element to '.open'
2. Not change inner HTML of current element
3. Reset default behavior of current element

But you can change this two ways:

1. When plug-in init
2. In data-attributes for current DOM-element

#### Examples:

`$(.controller).fastmark({self: false, selfreplace: 'It works!'});`

`<span class="controller" data-self="false" data-selfreplace="It works!">Click me</span>`

**Important:** data-attributes has the biggest priority

### Plugin props
1. *sefl*: **boolean** //Set *false* if you don't need to change current-element class
2. *selfclass*: **string** //Set class what you want to adding to current-element, without dot. It's *active* by default
3. *selfreplace*: **string** //Set content what you want to changed into current-element when it active
4. *controlled*: **string** //Set selector of element what you want to changed when current-element active. Should write full selector like *#myblock*, *.myblock* etc.
5. *controlledclass*: **string** //Set class what you want to adding to controlled-element, without dot. It's *open* by default
6. *preventdefault*: **boolean** //Set *false* if you don't need reset default current-element behavior
