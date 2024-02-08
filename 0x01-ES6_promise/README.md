<h1> Overview </h1>
In this project I learnt more important concepts in JavaScript.

<h2> Concepts </h2>

I learnt:

- Promises (how, why, and what).
- How to use the then, resolve, catch methods.
- How to use every method of the Promise object.
- Throw / Try.
- The await operator.
- How to use an async function.

<h2> Resources </h2>

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

- [Javascript Promise: An Introduction](https://web.dev/articles/promises)

- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw/ Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

<h2> Tasks </h2>

<h3>Task 0 - Keep every promise you make and only make promises you can keep </h3>

Return a Promise using this prototype function `getResponseFromAPI()`.

<b>File:</b> [0-promise.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x01-ES6_promise/0-promise.js)

---

<h3>Task 1 - Don't make a promise...if you know you can't keep it</h3>

Using the prototype below, return a `promise`. The parameter is a `boolean`.

```javascript
getFullResponseFromAPI(success);
```

When the argument is:

- `true`

  - resolve the promise by passing an object with 2 attributes:

    - `status`: `200`
    - `body`: `'Success'`

- `false`
  - reject the promise with an error object with the message `The fake API is not working currently`

<b>File:</b> [1-promise.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x01-ES6_promise/1-promise.js)

---

<h3>Task 2 - Catch me if you can! </h3>

Using the function prototype below

```javascript
function handleResponseFromAPI(promise)
```

Append three handlers to the function:

- When the Promise resolves, return an object with the following attributes
  - `status`: `200`
  - `body`: `success`
- When the Promise rejects, return an empty `Error` object
- For every resolution, log `Got a response from the API` to the console

<b>File:</b> [2-then.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x01-ES6_promise/2-then.js)

---

<h3>Task 3 - Handle multiple successful promises </h3>

In this file, import `uploadPhoto` and `createUser` from `utils.js`

Knowing that the functions in `utils.js` return promises, use the prototype below to collectively resolve all promises and log `body firstName lastName` to the console.

```javascript
function handleProfileSignup()
```

In the event of an error, log `Signup system offline` to the console

<b>File:</b> [3-all.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x01-ES6_promise/3-all.js)

---

<h3>Task 4 - Simple promise</h3>

Using the following prototype

```javascript
function signUpUser(firstName, lastName) {}
```

That returns a resolved promise with this object

```javascript
{
  firstName: value,
  lastName: value,
}
```

<b>File:</b> [4-user-promise.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x01-ES6_promise/4-user-promise.js)

---

<h3>Task 5- Reject the promise</h3>

Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string).

The function should return a Promise rejecting with an Error and the string `$fileName cannot be processed`

```javascript
export default function uploadPhoto(filename) {}
```

<b>File:</b> [5-photo-reject.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x01-ES6_promise/5-photo-reject.js)

---

<h3>Task 6 - Handle multiple promises</h3>

Import `signUpUser` from `4-user-promise.js` and uploadPhoto from `5-photo-reject.js`.

Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:

```javascript
[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]
```

<b>File: </b> [6-final-user.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x01-ES6_promise/6-final-user.js)

---

<h3>Task 7 - Load balancer</h3>

Write and export a function named `loadBalancer`. It should accept two arguments `chinaDownload` (Promise) and `USDownload` (Promise).

The function should return the value returned by the promise that resolved the first.

```javascript
export default function loadBalancer(chinaDownload, USDownload) {}
```

<b>File:</b> [7-load_balancer.js
](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x01-ES6_promise/7-load_balancer.js)

---

<h3>Task 8 - Throw error / try catch</h3>

Write a function named `divideFunction` that will accept two arguments: `numerator` (Number) and `denominator` (Number).

When the `denominator` argument is equal to 0, the function should throw a new error with the message `cannot divide by 0`. Otherwise it should return the numerator divided by the denominator.

```javascript
export default function divideFunction(numerator, denominator) {}
```

<b>File:</b> [8-try.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x01-ES6_promise/8-try.js)

---

<h3>Task 9 - Throw an error </h3>

Write a function named `guardrail` that will accept one argument `mathFunction` (Function).

This function should create and return an array named `queue`.

When the `mathFunction` function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message `Guardrail was processed` should be added to the queue.

Example:

```javascript
[1000, "Guardrail was processed"];
```

<b>File:</b> [9-try.js](https://github.com/m-aishah/alx-backend-javascript/blob/main/0x01-ES6_promise/9-try.js)
