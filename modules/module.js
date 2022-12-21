// difference between script and module
<script type="module">
  a = 5; // error
</script>

// Each module has its own top-level scope. In other words, top-level variables and functions from a module are not seen in other scripts

// Modules should export what they want to be accessible from outside and import what they need.

// In the browser, if we talk about HTML pages, independent top-level scope also exists for each <script type="module">

// we can make a variable window-level global by explicitly assigning it to a window property, e.g. window.user = "John".

// Then all scripts will see it, both with type="module" and without it.

// A module code is evaluated only the first time when imported
// If the same module is imported into multiple other modules, its code is executed only once, upon the first import. Then its exports are given to all further importers.

{/* <script type="module">
  alert(import.meta.url); // script URL
  // for an inline script - the URL of the current HTML-page
</script> */}

// object import.meta contains the information about the current module

// In a module, “this” is undefined
{/* <script>
  alert(this); // window
</script>

<script type="module">
  alert(this); // undefined
</script> */}
// TODO:Ask about should we use it or not
{/* <script type="module">
  alert(typeof button); // object: the script can 'see' the button below
  // as modules are deferred, the script runs after the whole page is loaded
</script>

Compare to regular script below:

<script>
  alert(typeof button); // button is undefined, the script can't see elements below
  // regular scripts run immediately, before the rest of the page is processed
</script>

<button id="button">Button</button> */}

// Each module is a piece of code that is executed once it is loaded

// In that code, there may be declarations(variable declarations, function declarations etc.)

// By default these declarations stay local to the module.
// You can mark some of them as exports, then other modules can import them 

// A module can import things from other modules, it refers to those modules via module specifiers, strings that are either 
// ==> relative path 

// ES5 module systems 
// ==> commonjs is synchronous in nature.The dominant implementation of this standard is in Node.js
// (Node.js module have a few feature that go beyond common js)

// ==> Asynchronous Module definition (AMD) -> The most popular implementation of this standard is requirejs 
// It is slightly more complicated syntax, enabling AMD to work without eval()
// Design for asynchronous loading and browsers

// ES5 
module.export.print = print;
module.export.inc = inc;

const all = require('./1'); // CJS

// ES6 modules
// Similar to common JS, they have compact syntax, a preference for single exports and support for cyclic dependencies.
// Similarly to AMD, they have direct support for asynchronous loading and configurable module

export {print, inc};
import {print, inc} from '../1.js' // ES6 we have to declare type = module in package.json



