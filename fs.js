const fs1 = require("fs");
//renaming
// fs1.rename('example.txt','justkidding.txt',(err)=>{
//     if(err)
//         console.log(err)
//     else    
//         console.log('Success');
// });

//add data to the file
// fs1.appendFile('justkidding.txt','this is appeneded data',(err)=>{
//     if(err)
//         console.log(err);
//     else    
//         console.log('append successful');
// }); 

//delete file
fs1.unlink('justkidding.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Success delete');
});