//importing the whole fs module
/*const fs = require ('fs');

fs.readFile('./content/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    fs.readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        fs.writeFile(
            './content/fs-async-result.txt',
            `The result of async write file is: ${first}, ${second}!`,
            (err, result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        )
    })
})*/


//importing specific methods from fs
const {readFile, writeFile} = require ('fs');
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/fs-async-result.txt',
            `The result of async write file is: ${first}, ${second}!`,
            (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log('done with this task!');
            }
        )
    })
})
console.log('starting next task!');