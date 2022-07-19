const fs = require('fs');
// fs.mkdir('New', (err) => {
//     if (err)
//         console.log(err);
//     else {
//             fs.writeFile('./New/examplef.txt','123',(err)=>{
//                 if (err)
//                     console.log(err);
//                 else
//                     console.log('success');
//             });
//     }});
fs.unlink('./New/examplef.txt',(err)=>{
    if(err)
        console.log(err)
    else
        console.log('Successfull deletion of txt');
});
fs.rmdir('New',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Success');
}); // error if dir is not empty