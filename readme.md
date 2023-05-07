<h1>Object Array to Map Converter</h1>
<p>This is a small JavaScript utility function that takes an array of objects and converts it into a Map of objects grouped by a specified key.</p>
<h2>Usage</h2>
<p>To use this function, simply import it into your JavaScript file and call it with two parameters:</p>
<pre><code>const objectArrayToMap  = require('object-array-to-map');

const arr = [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}, {id: 3, name: 'John'}];
const key = 'name';

const map = objectArrayToMap(arr, key);
console.log(map);</code></pre>
<p>This will output a Map object containing the grouped objects:</p>
<pre><code>Map(2) {
  'John' => [ { id: 1, name: 'John' }, { id: 3, name: 'John' } ],
  'Jane' => [ { id: 2, name: 'Jane' } ]
}</code></pre>
<h2>Parameters</h2>
<p>The <code>objectArrayToMap</code> function takes two parameters:</p>
<ul>
   <li><code>arr</code> (Array): The array of objects to convert.</li>
   <li><code>key</code> (string): The name of the key to group the objects by.</li>
</ul>
<h2>Return Value</h2>
<p>The <code>objectArrayToMap</code> function returns a Map object containing the grouped objects.</p>
<h2>Implementation Details</h2>
<p>The `objectArrayToMap` function uses the Array.prototype.reduce method to iterate over the input array and group the objects by the specified key. It creates a new Map object and populates it with the grouped objects. If an object with the same key already exists in the Map, the current object is appended to its corresponding array; otherwise, a new key-value pair is created in the Map.</p>