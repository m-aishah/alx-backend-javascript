<h1> Overview </h1>

<h2> Concepts </h2>

<h2> Resources </h2>

- [ES6 Basics](https://www.w3schools.com/js/js_es6.asp)
- [Statements and Declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)

<h2> Tasks </h2>

<h3>Task 0 - Const or let? </h3>

Modify

- function `taskFirst` to instantiate variables using `const`

- function `taskNext` to instantiate variables using `let`

```javascript
export function taskFirst() {
  var task = "I prefer const when I can.";
  return task;
}

export function getLast() {
  return " is okay";
}

export function taskNext() {
  var combination = "But sometimes let";
  combination += getLast();

  return combination;
}
```

<b>File:</b> [0-constants.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x00-ES6_basic/0-constants.js)

---

<h3> Task 1 - Block Scope </h3>

Given what you’ve read about `var` and hoisting, modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block.

```javascript
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
```

<b>File: </b> [1-block-scoped.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x00-ES6_basic/1-block-scoped.js)
