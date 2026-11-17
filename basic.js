console.log("Hello, World!");
 // asynchronous programming
 console.log("start synchronous programming");
console.log("end synchronous programming");
//execution order 
console.log("synchronous code")
setTimeout(() => {
    console.log("macroTask queue ");
}, 0);


Promise.resolve().then(() => {
    console.log("microTask queue");
});