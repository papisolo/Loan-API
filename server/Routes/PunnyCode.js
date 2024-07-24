//The punycode module is a bundled version of the Punycode.js module. Punycode is a character encoding scheme defined by RFC3492 that is 
//primarily intended for use in Internationalized Domain Names. Because host Names in URLs are limited to ASCII characters only, Domain names
// that contain non ASCII characters must be converted into ASCII using the Punycode scheme. 
const punycode = require('punycode')

punycode.decode() // Converts from a punycode and returns  string 
punycode.encode() //Converts to a punycode of ASCII
punycode.toASCII() //Converts to a punycode of ASCII
punycode.toUnicode() //Converts from a punycode and returns string 


punycode.ucs2.decode() // returns an array containing the numeric codepoint values of each UnicCode symbol in the string 
//Example : punycode.ucs2.decode(); '[0x61, 0x62, 0x63]'

punycode.ucs2.encode([0x61, 0x62, 0x63]) //returns 'abc'