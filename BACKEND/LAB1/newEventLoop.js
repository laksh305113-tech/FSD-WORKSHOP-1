console.log("This is the starting point of my code");

setTimeout(() => {
    console.log("This is first timeout function");
}, 5000);

setTimeout(() => {
    console.log("This is second timeout function");
}, 2000);

setTimeout(() => {
    console.log("This statement will run after 0 ms.");
}, 0);

process.nextTick(() => {
    console.log("This is process.nextTick code");
});

new Promise((resolve, reject) => {
    let success = false;

    if (success) {
        resolve("Data Loaded Successfully");
    } else {
        reject("Something went wrong");
    }
})
.then((result) => console.log(result))
.catch((error) => console.log(error));

new Promise((resolve) => {
    // Never resolved
}).then((result) => console.log(result));

console.log("This is the end point of my code");