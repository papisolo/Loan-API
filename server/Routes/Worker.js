//THE WORKER_THREAD MODULE ENABLES THE USE OF THREADS THAT EXECUTE JAVASCRIPT IN PARALLEL. WORKERS(THREADS) ARE USEFUL FOR PERFORMING 
//CPU-INTENSIVE JAVASCRIPT OPERATION. THEY WILL NOT HELP MUCH WITH I/O INTENSIVE WORK. NODE.JS'S BUILT IN ASYNCHRONOUS I/O OPERATIONS ARE MORE
//EFFICIENT THAN WORKERS CAN BE. UNLIKE CHILD_PROCESS OR CLUSTERS, THEY SHARE MEMORY BY TRANSFERRING ARRAYBUFFER INSTANCES

const {Worker,isMainThread, parentPort, workerData } = require('worker_threads')

if(isMainThread){

    module.exports = function parseJSAsync(script){
        return new Promise((resolve, reject) => {
            const worker = new Worker(__filename, {workerData : script})


            worker.on('message', resolve);
            worker.on('error', reject)
            worker.on('exit', (code) =>{
                if(code !== 0)
                reject(new Error(`Worker stopped with exit code ${code} `))
            })
        });
     //INSIDE HERE THE WORKER WILL BE CREATED AND IT WILL LISTEN TO MESSAGE COMING FROM THE WORKER THREAD
        
    }
}else {
    const {parse} = require('some-js-parsing-lib');
    const script = workerData
    parentPort.postMessage(parse(script))
}

//worker.postMessage(value, [, tansferList]) Sends a message to the worker that will be received REQUIRE('WORKER_THREADS).PARENTPORT.ON('MESSAGE)
//worker.unref() calling unref() on a worker will allow the thread to exit if this is the only active handle in the system
//worker.ref() calling ref() on a previously unref()ed worker will not let the program exit if its the only active handle left
// If options.eval is set to true when creating  a new worker, then the first option in the constructor will be a string containing javascript code rather than a path
// const {port1, port2} = new MessageChannel(); port1.on('message', (message) => console.log('received' + message)), port2.postMessage({foo: 'bar})