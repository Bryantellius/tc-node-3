# June 30, 2021

- Review JavaScript Promises
- JS Promises Quiz
- Cover JavaScript API Lecture
- Cover JavaScript API Exercise
- Cover NPM, Webpack, and Modules

## Promises

- Asynchronous code is executed independently from synchronous code
  - None blocking
- Callback functions: a function that is called after some asynchrounous action is completed

```
let promise = new Promise((resolve, reject) => {
    // something succeeds
    resolve(value)

    // something fails
    reject(reason)
})

promise.then((value) => // use successful value).catch((err) => // handle error feedback)
```

- Async/await syntax

```
async function funcName(res) {
    let data = await res.json();
}
```
