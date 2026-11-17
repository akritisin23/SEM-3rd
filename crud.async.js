const fs = require('fs');
// callback based method

// create a file
fs.writeFile("notes.txt", "Hello, note.ECE-A ", (err) => {
    console.log("File created successfully");
    cosole.log (



    })

    fs.readFile("notes.txt", (err, data) => {
        if (err) {
            console.log(err);
            return 
        }
        console.log( data);
    })

    
    //update a file
    fs.appendFile("notes.txt", updateData , (err) => {;