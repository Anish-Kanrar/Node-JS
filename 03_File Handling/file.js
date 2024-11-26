//fs modulo:
//fs: file system
const fs = require("fs");

//create file
//Sync...
//fs.writeFileSync('./test.txt',"Hey There");
//fs.writeFileSync('./test.txt',"Hello Coder!!")


//Aysnc...
// asynchronous does not return anything.
//fs.writeFile("./test.txt","Hello Baby",(err) =>{})

/*
//Sync read...    
// result=fs.readFileSync('./name.txt',"utf-8")
// console.log(result);
   
//Asyn
fs.readFile('./name.txt',"utf-8",(err, result)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log(result);   
    }
})
*/

// Appends string to a file
fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("test.txt",`\nhey there`)

fs.appendFileSync("test.txt", `${Date.now()} hey there \n`)

// copy a file content to another file 
fs.cpSync('./test.txt', './copy.txt')

//delete a file
fs.unlinkSync('./copy.txt')

//stat of a file
console.log(fs.statSync('./test.txt'))

//create folder
//fs.mkdirSync('my-docs')
fs.mkdirSync('my-docss/a/b', { recursive: true });
