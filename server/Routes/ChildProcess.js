const child_process = require('child_process');
const fs = require('fs');


for(var i = 0 ; i < 3; i++){

    var workerProcess = child_process.exec(' post.js', (error, stdout, stderr) => {
        if(error){
           console.log(error.stack)
           console.log('Error code', error.code)
           console.log('Signal received', error.signal)
        }
        console.log('stdout' + stdout);
        console.log('stderr'+ stderr)

    })

    workerProcess.on('exit', (code) => {
        console.log('Child process exited with exit code' + code);
    })
}

  

child_process.exec('dir', (err, stdout, stderr) => {

    if(err){
        console.error(err);
        return;
    }
    console.log(stdout); // Return all files in the directory
})


