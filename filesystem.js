//file system
//crud operations in file/folder
const fs = require('fs');
// //create a file
// fs.writeFile('example.txt',"this is an example",(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log('File success create');
//     fs.readFile('example.txt','utf8',(err,file)=>{
//         if(err)
//             console.log(err);
//         else    
//             console.log(file);
//     })};
// });

fs.readdir('example',(err,files)=>{
    if(err)
        console.log(err);
    else{
        for(let file of files){
            fs.unlink('./example/' + file, (err)=>{
                if(err)
                    console.log(err);
                else
                    console.log('Successful delete');
            });
        };
    };
}) ;