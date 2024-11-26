const fs= require("fs")
const os = require("os")

// cpu cores =>
console.log(os.cpus().length);  //8


//Booking :
console.log("1");
const result = fs.readFileSync("test.txt","utf-8");
console.log(result);

console.log("2");


//Non-Blocking:
console.log("1");
fs.readFile("test.txt","utf-8",(err, result)=>{
    console.log(result);
    
})
console.log("2");
console.log("3");


//Default Thread Pool size = 4
//Max? -8core cpu - 8 