const fs = require('fs');
// import fs from 'fs';

//Read------------------------
const toRead = (route, cb) => {
    fs.readFile(route, (err, data) => {
        cb(data.toString());
    })
} 

toRead(__dirname + '/lorem.txt', console.log);

//Write------------------------
const toWrite = (route, content, cb) => {
    fs.writeFile(route, content, (err) => {
        if(err){
            console.log(err)
        }else
            console.log('Se ha escrito!');
            read(route,cb);
    });
}

// toWrite(__dirname + '/new.txt', `I'm new` ,console.log);

//Delete------------------------
const toDelete = (route, cb) => {
    fs.unlink(route, cb);
}

// toDelete(__dirname + '/new.txt', console.log);