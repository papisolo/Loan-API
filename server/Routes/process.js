const process = require('process');
const handle = require('express-handlebars')
const fs = require('fs')

function handleExit() {
  console.log("Programme exited with" + code)
}


process.on('exit', handleExit);


process.stdin.read()

//process.nextTick(); //Adds a callback to the next tick queue
function maybeSync(arg, cb) {
  if (arg) {
    cb();
    return;
  }
  fs.stat('file', cb);
}

const maybeTrue = Math.random() > 0.5;

maybeSync(maybeTrue, () => {
  foo();
});

bar();

console.log('start');
nextTick(() => {
  console.log('nextTick callback');
});
console.log('scheduled');