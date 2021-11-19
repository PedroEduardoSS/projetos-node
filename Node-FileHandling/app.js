const fs = require('fs');

// create and read a file
/*
fs.writeFile('test.txt','This is a example',(err)=>{
    if(err){
        console.log(err);
    } else {
        console.log('File created!!!');
        fs.readFile('test.txt', 'utf-8', (err, file)=>{
            if(err){
                console.log(err);
            } else {
                console.log(file);
            }
        });
    }
});
*/

// Rename file

/*
fs.rename('test.txt','example.txt', (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log('File renamed successfully!!!')
    }
});
*/

// Append
/*
fs.appendFile('example.txt','Hello, World!', (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log('Data appended!!!');
    }
});
*/

// Delete file
/*
fs.unlink('example.txt', (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log('File Deleted');
    }
});
*/

// Create a folder
/*
fs.mkdir('tutorial', (err)=>{
    if(err){
        console.log(err);
    } else {
        fs.writeFile('./tutorial/example.txt', '12345\nWho we are', (err)=>{
            if(err){
                console.log(err);
            } else {
                console.log('Successfully created file!!!');
            }
        });
    }
});
*/

// Delete folder (I need delete the file before the folder)
/*
fs.rmdir('tutorial', (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log('Folder deleted!!!')
    }
});
*/

// Read the folder
fs.readdir('tutorial', (err, files)=>{
    if(err){
        console.log(err);
    } else {
        console.log(files);
        for(let file of files){
            fs.unlink('./tutorial/' + file, (err)=>{
                if(err){
                    console.log(err);
                } else {
                    console.log('File Deleted');
                }
            });
        }
    }
});