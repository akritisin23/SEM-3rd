const fs = require('fs');
fs.writeFileSync('nodes.txt', 'Hello, node.js!');

const data = fs.readFileSync("nodes.txt")
console.log(`Read data: ${data}`);

fs.appendFileSync('nodes.txt', "ECE-A")
fs.rmSync("nodes.txt")  