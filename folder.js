const fs = require('fs');
fs.mkdir('NewFolder', (err) => {
    if (err)
        console.log(err);
    else {
        //console.log('Success');
        fs.rmdir('NewFolder', (err) => {
            if (err)
                console.log(err);
            else {
                console.log('successful removal');
            };
        })
    };

});
//after we delete the folder the else part of rmdir will beb successful