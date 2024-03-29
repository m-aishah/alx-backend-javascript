<h1> Overview </h1>
In this project I was introduced to the ECMAScript 6.

<h2> Concepts </h2>

I learnt:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

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

---

<h3> Task 2 - Arrow functions</h3>

Rewrite the following standard function to use ES6’s arrow syntax of the function `add` (it will be an anonymous function after)

```javascript
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ["SOMA", "Union Square"];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```

<b>File:</b> [2-arrow.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x00-ES6_basic/2-arrow.js)

---

<h3>Task 3 - Parameter defaults</h3>

Condense the internals of the following function to 1 line - without changing the name of each function/variable.

Hint: The key here to define default parameter values for the function parameters.

```javascript
export default function getSumOfHoods(
  initialNumber,
  expansion1989,
  expansion2019
) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```

<b>File: </b>[3-default-parameter.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x00-ES6_basic/3-default-parameter.js)

---

<h3> Task 4 - Rest parameter syntax for functions </h3>

Modify the following function to return the number of arguments passed to it using the rest parameter syntax

```javascript
export default function returnHowManyArguments() {}
```

Example:

```javascript
> returnHowManyArguments("Hello", "Holberton", 2020);
3
>
```

<b> File: </b> [4-rest-parameter.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x00-ES6_basic/4-rest-parameter.js)

---

<h3> Task 5- The wonders of spread syntax</h3>

Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

```javascript
export default function concatArrays(array1, array2, string) {}
```

<b>File:</b> [5-spread-operator.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x00-ES6_basic/5-spread-operator.js)

---

<h3> Task 6 -  Take advantage of template literals </h3>

Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

```javascript
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: "$119,868",
    gdp: "$154.2 billion",
    capita: "$178,479",
  };

  return (
    "As of " +
    year +
    ", it was the seventh-highest income county in the United States" /
      ", with a per capita personal income of " +
    budget.income +
    ". As of 2015, San Francisco" / " proper had a GDP of " +
    budget.gdp +
    ", and a GDP per capita of " +
    budget.capita +
    "."
  );
}
```

<b>File: </b>[6-string-interpolation.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x00-ES6_basic/6-string-interpolation.js)

---

<h3>Task 7 - Object property value shorthand syntax </h3>

Notice how the keys and the variable names are the same?

Modify the following function’s `budget `object to simply use the keyname instead.

```javascript
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
```

<b>File:</b> [7-getBudgetObject.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x00-ES6_basic/7-getBudgetObject.js)

---

<h3>Task 8 - No need to create empty objects before adding in properties</h3>

Rewrite the `getBudgetForCurrentYear `function to use ES6 computed property names on the `budget` object

```javascript
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
```

<b>File:</b> [8-getBudgetCurrentYear.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x00-ES6_basic/8-getBudgetCurrentYear.js)

---

<h3>Task 9 - ES6 method properties</h3>

Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object

```javascripts
mport getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
```

<b>File:</b> [9-getFullBudget.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x00-ES6_basic/9-getFullBudget.js)

---

<h3>10 - For...of Loops </h3>

Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of `operator. And don’t forget that `var` is not ES6-friendly.

```javascript
export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
```

<b>File:</b> [10-loops.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x00-ES6_basic/10-loops.js)

---

<h3>Task 11 - Iterator</h3>

Write a function named `createEmployeesObject` that will receive two arguments:

- `departmentName` (String)
- `employees` (Array of Strings)

```javascript
export default function createEmployeesObject(departmentName, employees) {}
```

The function should return an object with the following format:

```javascript
{
     $departmentName: [
          $employees,
     ],
}
```

<b>File:</b> [11-createEmployeesObject.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x00-ES6_basic/11-createEmployeesObject.js)

---

<h3>Task 12 - Let's create a report object</h3>

Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.

```javascript
export default function createReportObject(employeesList) {}
```

`createReportObject` should return an object containing the key `allEmployees` and a method property called `getNumberOfDepartments`.

`allEmployees` is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.

The method property receives `employeesList` and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.

```javascript
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};
```

<b>File: </b>[12-createReportObject.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x00-ES6_basic/12-createReportObject.js)

---

<h3>Task 13 - Iterating through report objects</h3>

Write a function named `createIteratorObject`, that will take into argument a report Object created with the previous function `createReportObject`.

This function will return an iterator to go through every employee in every department.

```javascript
export default function createIteratorObject(report) {}
```

<b>File:</b> [100-createIteratorObject.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x00-ES6_basic/100-createIteratorObject.js)

---

<h3>Task 14 - Iterate through objects</h3>

Finally, write a function named `iterateThroughObject`. The function’s parameter `reportWithIterator` is the return value from `createIteratorObject`.

```javascript
export default function iterateThroughObject(reportWithIterator) {}
```

It should return every employee name in a string, separated by |

```javascript
{
 allEmployees: {
    engineering: [
         'John Doe',
         'Guillaume Salva',
    ],
 },
 ...
};
```

Should return `John Doe | Guillaume Salva`

Reminder - the functions will be <i>imported</i> by the test suite.

Full example:

```javascript
> employees = {
      ...createEmployeesObject('engineering', engineering),
      ...createEmployeesObject('design', design),
    };
>
> const report = createReportObject(employees);
> const reportWithIterator = createIteratorObject(report);
> iterateThroughObject(reportWithIterator)
'John Doe | Guillaume Salva | Kanye East | Jay Li'
>
```

<b>File:</b> [101-iterateThroughObject.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x00-ES6_basic/101-iterateThroughObject.js)
