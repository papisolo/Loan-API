//A net.server can be a TCp or an IPC server depending on what it listens to 
//server.listen(path[, backlog] [callback]) for IPC servers
//server.listen(path[, backlog] [callback]) for TCP servers All listen() methods can take a backlog paramter to specify the mximum length of the queue of pending connections
//It is not recommended to use th server.maxConnections option once a socket has been sent to a child with CHILD_PROCESS.FORK()
//SERVER.REF() calling ref on a previously unrefed server will not let the program exit if it's the only server left
//SERVER.UNREF() calling unref() on a server will allow the program to exit if this is the only active server in the event system
//CLASS NET.SOCKET; A net.socket can be created by the user and used directly to interact with a server. For eample, it is returned by NET.CREATECONNECTION(),
//so the user can use it to talk to the server. It can also be created by Nodejs and passed to the user when a connection is received. For example,
//it is passed to the liteners of a " CONNECTION"  event emitted on a NET.SERVER so the user can use it to interact with the client.
const net = require('net')
const http = require('http')

const server = net.createServer((c) =>{   //Creates a server

    //Connection Listener
    console.log('Client Connected')

    
    c.on('end', () =>{
        console.log("Client disconnected")
    })
   
});

const socket = net.createConnection() //This will create a socket
 const agent = new http.Agent({keepAlive: true})

  agent.createConnection((err, stream) => {    //alias to net.createConnection()

    console.log(stream)
 })


const port = 8080
server.listen(port)