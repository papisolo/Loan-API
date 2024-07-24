const Routes = require("express").Router()
const fs = require('fs')
const path = require('path')
require('pdfkit')
const events = require('events')

//const {once} = require('events')

Routes.get("/", (req, res) => {

    //DELETE FILE ASYNCHRONOUSLY AND HANDLE ERROR PASSING CALLBACK
    /*fs.unlink("File Page" , (err)=>{
        if(err){
            console.error(err);
        }

        
    })   // This happens asynchronously 
*/
    //DELETE FILE SYNCHRONOUSLY AND HANDLE ERROR USING TRY CATCH
    /*
    try{
        fs.unlinkSync("File Page") //This happens synchronously
    
    }catch(err){
    
        if(err){
            console.error(err)
        }
    }*/

    //RENAME A FILE, OPEN IT AND READ FROM IT
    /*fs.rename(path.join(__dirname,   "File.js"),
     path.join(__dirname,  "FileSystem.js"), 
         (err) => {
        if(err) {
            console.log(err)
        }
    
        fs.open(path.join(__dirname,   "FileSystem.js") , (err, fd) => {
    
            if(err)
            {
            throw err;
            }
            fs.fstat(fd, (err, stats) => {
                if(err) {
                    throw err;
                }
        
                console.log(stats)
            })
         console.log(fd)
         fs.close(fd, (err))
        })
    })*/



    //GET THE STATISTICS ABOUT THE FILE
    fs.stat(__filename, (err, stats) => {
        if (err) throw err;
        console.log(`stats : ${JSON.stringify(stats)}`)
    })

    //OPEN THE FILE AND READ THE STATS USING THE FILE DESCRIPTOR(fd) AND THEN CLOSE
    fs.open(path.join(__dirname, "index.js"), (err, fd) => {

        if (err) {
            throw err;
        }
        fs.fstat(fd, (err, stats) => {
            if (err) {
                throw err;
            }

            console.log(stats)
        })
        console.log(fd)
        fs.close(fd, (err))
    })

    //READ FROM A FILE
    /*fs.readFile(path.join(__dirname, "index.js"), 'utf8', (err, Data)=>{
     if(err)
     {
       throw err;
     }
    
     console.log(Data) //utf8 encoding will print the exact document
    
    })*/ //Windows does not allow for C:\Users\USER\Loan API\server\Routes\bar forward slash

    // READ FROM A DIRECTORY, LOOP THROUGH,  CHECK IF THE FILE NAME IS FileSystem.js AND THEN READ THE FILE 
    /*fs.readdir(__dirname, {encoding : 'utf8', withFileTypes: false}, (err, files) => {
    
        if(err){
            throw err;
        }
        files.forEach(element => {
            if(element == "FileSystem.js")
         {
            fs.readFile(path.join(__dirname, element), 'utf8', (err, Data)=>{
                if(err)
                {
                  throw err;
                }
               
                console.log(Data) 
               
               })
         } 
        });
         
       
    
    })*/ //When withFileTypes is set to true it returns an object: Dirent { name: 'FileSystem.js', [Symbol(type)]: 1 }Dirent { name: 'index.js', [Symbol(type)]: 1 }Dirent { name: 'path.js', [Symbol(type)]: 1 }Dirent { name: 'post.js', [Symbol(type)]: 1 }



    var reader = fs.createReadStream(path.join(__dirname, "index.js"))
    reader.pipe()

    setTimeout(() => {


        reader.close();
        reader.read()
    }, 100)

    // reader.read() //The readable.read() method should only be called on Readable streams operating in paused mode. In flowing mode, readable.read() is called automatically until the internal buffer is fully drained.

    reader.on('data', (stream) => {

        console.log(stream)
    })

    //const MyEvent = new events()

    process.stdin.resume()

    function foo() {
        console.log('Foo')
    }

    function bar() {
        console.log('Bar')
    }

    function definitelyAsync(arg, cb) {
        if (arg) {
            process.nextTick(cb);
            return;
        }

        fs.stat('file', cb);
    }

    const maybeTrue = Math.random() > 0.5;

    definitelyAsync(maybeTrue, () => {
        foo();
    });

    bar();

    //THE PROCESS.NEXTtICK WILL PUT THE CALLBACK FUNCTION ON HOLD ALLOWING ALL OTHER CODE TO RUN TO COMPLETION BEFORE EXECUTING
    console.log('start');
    process.nextTick(() => {
        console.log('nextTick callback');
    });
    console.log('scheduled');

    res.send("File Page")
})


fs.open(path.join(__dirname, "index.js"), (err, fd) => {

    if (err) {
        throw err;
    }
    fs.fstat(fd, (err, stats) => {
        if (err) {
            throw err;
        }

        console.log(stats)
    })
    console.log(fd)
    fs.close(fd, (err) => {
        console.log("File Closed")
    })
})

const a = function () {
    console.log("Checking")
}

module.exports = a