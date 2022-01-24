const { exec, spawn } = require('child_process');

// exec('ls -la', (err, stdout, sterr) => {
//     if(err){
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// })

let process = spawn('ls',['-la']);

console.log(process.pid);