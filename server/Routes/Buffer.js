const buffer = require('buffer')


//TYPEDARRAY
 const typedArray1 = new Int8Array(8)
 typedArray1[0] = 32

 const typedArray2 = new Int8Array(typedArray1)
 typedArray2[1] = 42

 const typedArray3 = new Uint16Array(20)

 console.log(typedArray1)
 console.log(typedArray2)
 
 //When creating an instance of a typedarray subclass(e.g Int8Array), an array buffer is created internally in memory or, if an ArrayBuffer
 //object is given as constructor argument, that ArrayBuffer is used instead. All typed arrays operate on ArrayBuffers, where you can observe the exact byte representation of each element, so how the numbers are encoded in binary format is significant




 //BUFFER
 //creates a zero-filled buffer of length 10
 const buf1 = Buffer.alloc(10)

 //creates a Buffer of length 10, filled with 0x1
 const buf2 = Buffer.alloc(10, 1) // Result <Buffer 01 01 01 01 01 01 01 01 01 01>
//console.log(buf2)

const buf3 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]) //This will return a <Buffer 62 75 66 66 65 72>
//console.log(buf3.toString()) //When Converted to string it returns a symbol


const buf4 = Buffer.from([0x74 ,0x65 ,0x73 ,0x74]) //This will return a <Buffer 74 65 73 74>
//console.log(buf4.toString())  //This will return test when converted to string default utf8 encoding


//Creates a buffer containing UTF-8 bytes [0x74, 0x65, 0x73, 0x74]
const buf5 = Buffer.from('test') //This will return a <Buffer 74 65 73 74>
//console.log(buf5.toString('hex'))  //This will return test but It will return 74657374 when the encoding is 'hex'

//Creates a buffer containing UTF-8 bytes [0x1, 0x2, 0x3]
const buf6 = Buffer.from([1,2,3]) // Returns  <Buffer 01 02 03>
//console.log(buf6)



const buf7 = Buffer.from(" Hello world", 'ascii') //Prints <Buffer 20 48 65 6c 6c 6f 20 77 6f 72 6c 64>
const buf8 = Buffer.from(" Hello world", 'utf16le') //Prints <Buffer 20 00 48 00 65 00 6c 00 6c 00 6f 00 20 00 77 00 6f 00 72 00 6c 00 64 00>
//console.log(buf7.toString('hex')) //Prints 2048656c6c6f20776f726c64
//console.log(buf7.toString('base64')) // Prints IEhlbGxvIHdvcmxk
//console.log(buf7.toString('utf8')) //Prints Hello World
 const buf9  =  Buffer.from("IEhlbGxvIHdvcmxk" ,'base64' )
 console.log(buf9.toString('utf8')) //Prints Hello World


const arrayBuffer = new ArrayBuffer(8)
console.log(arrayBuffer)

const view = new Int8Array(arrayBuffer) // Int32Array will give us only two elements in the array
console.log(view)
//const buf = new buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
