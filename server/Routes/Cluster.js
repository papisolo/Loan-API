const cluster = require('cluster')
const http = require("http")
const numCpus = require('os').cpus().length;
cluster.isWorker
global.console.log()

//The Cluster is a collection of small child processes("workers") of a single parent process in Node. Using the fork() method of the Node 
//child_processes module, workers are created as child processes of a parent process


/*
if(cluster.isMaster){

console.log(`Master ${process.pid} is running`)
console.log(`Master cluster setting up  ${numCpus} is running`)

//Fork Workers
for(let i = 0; i < numCpus; i++){
    cluster.fork();
}

cluster.on('online', (worker) => {
console.log(`Worker ${worker.process.pid} is online`)


});


cluster.on('exit', (worker,code,signal) => {

    console.log(`worker ${worker.process.pid} died`);
} );


} else{
    //Workers can share any TCP connection
    //In this case it is an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('hello world')
    }).listen(8000);

    console.log(`Worker ${process.pid} started`)
    console.log(`Worker ${cluster.worker.id} started`) //WE HAVE ACCESS TO THE WORKER IN HERE
}
*/


/*if(cluster.isMaster){

    console.log('I am Master');
    cluster.fork();
    cluster.fork();
    //We cant get cluster.worker.id here
} else if(cluster.isWorker){
    console.log(`I am worker ${cluster.worker.id}`)
    console.log(cluster.isWorker)
    //You can only get the worker Object here after calling the cluster.fork(); in the master
}*/

/*
if(cluster.isMaster){

    //THIS CODE ONLY WORKED AFTER I USED THE IF STATEMENT ABOVE
    const worker = cluster.fork(); //THIS CAN ONLY BE CALLED IN A MASTER
worker.on('exit',(code, signal) => {

    if(signal){
        console.log(`worker was killed by signal : ${signal}`);
    }
    else if(code !==0){
        console.log(`worker exited with error code: ${code}`);

    }
    else {
        console.log('worker success!')
    }
})
}
*/

/*
if(cluster.isMaster){

    console.log('I am Master');
   const worker =  cluster.fork();
   console.log(`I am worker ${worker.id}`)
   worker.send('hi there')
   //Inside this master we are listening to a message been sent from the worker
} else if(cluster.isWorker){
    process.on('message', (msg) => {
        console.log(msg)
        process.send("Sending message to the master")
    })
    //We can also get access to the process here
    //Inside here we are listening to a message been sent to this specific worker
    console.log(cluster.worker)
    
    //You can only get the worker Object here after calling the cluster.fork(); in the master
}
*/

//When any of the workers die, the cluster module will emit the 'exit' event. This can be used to restart the worker by calling .fork() again
//THIS GUY IS LISTENING ON ALL THE WORKERS
cluster.on('exit', (worker, code, signal) => {
    console.log('worker died. rstarting...., ')
    cluster.fork(); //This guy kept on creating the worker that exited when i used worker.send in the worker above which made the app exited
})