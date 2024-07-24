const zlib = require('zlib')
const http = require('http')

const gzip = zlib.createGzip();

const fs = require('fs')

const inp = fs.createReadStream('input.txt');
const out = fs.createWriteStream('output.txt');

const input = 'Geek'

// const gzip = zlib.createInflate() can be used inside the zlib.deflate method which is used to inflate the data using
//gzip.write() and gzip.on('data' (err, data) => {})


//THIS WILL ZIP
/*zlib.gzip(input, (err, buffer) => {

    if(!err){
        console.log(buffer.toString('base64'))  // returns  H4sIAAAAAAAACnNPTc0GAGGRcasEAAAA
    }

    else{ console.log(err)}

})*/


//THIS WILL ZIP AND UNZIP
/*zlib.gzip(input, (err, buffer) => {

    if(!err){
         zlib.unzip(buffer, (err, buffer) => {

    if(!err){
        console.log(buffer.toString('utf8')) // Returns Geek
    }

    else{ console.log(err)}

})
    }

    else{ console.log(err)}

})*/

console.log(gzip)
//THIS WILL DEFLATE OR ZIP AND RETURN A BUFFER
zlib.deflate(input, (err, buffer) => {

    if(!err){
        console.log(buffer.toString('base64')) // Returns eJxzT03NBgADhAF9
    }

    else{ console.log(err)}

})

//THIS WILL INFLATE OR UNZIP
const buffer = Buffer.from('eJxzT03NBgADhAF9', 'base64')
zlib.unzip(buffer, (err, buffer) => {

    if(!err){
        console.log(buffer.toString('utf8')) // Returns Geek
    }

    else{ console.log(err)}

})


//DONT FORGET TO TRY DOING THIS
/*
out.on('data' , (stream) => {

    console.log(stream)
})
*/




inp.pipe(gzip).pipe(out) //We are piping gzip into the WriteStream

