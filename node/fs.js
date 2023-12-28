const fs = require('fs');

fs.readFile('a.txt','utf-8',(err,data) => {
    if(err){
        throw err;
    }
    console.log(data);
})

console.log("After async reading file ");


const data = fs.readFileSync('a.txt',{encoding:'utf-8',flag:'r'});
console.log(data);

console.log("After sync reading file");