const promise1 = new Promise((resolve, reject) => {})
()=>{
success=true
if (success) {
  resolve('Success!');
} else {
  reject('Error occurred.');
}   
let promise2 = new Promise((resolve, reject) => {
    let success = true; 
    if (success) {
        resolve({
            id: 2930309,
            username: "ADITYA",
        } )










































    } else {
        reject(new Error('ORDER NOT FETCHED.'));
    })
    promise1
    .then()
    .catch()

});
 promise1
 .then((response) => {
        console.log( response);
 })
 .catch((error) => {
        console.log('Error:', error);
 });

 promise.race([promise1, promise2])
 .then((response) => {
        console.log( response);
 })
 .catch((error) => {
        console.log( error);

 })
 promise1
 .then((response) => {
        console.log( response);
 }          
