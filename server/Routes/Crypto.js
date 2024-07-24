const Crypto = require('crypto').Certificate()


//SPKAC CONTAINS THE PUBLIC KEY, DOMAIN NAME AND PROOF OF IDENTITY
   const spkac = getSpkacSomehow() //THIS CAN BE A BUFFER, TYPED ARRAY, STRING
   const challenge = Crypto.exportChallenge(spkac) //IT RETURNS A BUFFER 
   challenge.toString('utf8')

   const publicKey = Crypto.exportPublicKey(spkac) //IT RETURNS A BUFFER 



//CIPHER IS USED FOR DATA ENCRYPTION
    const algorithm = "aes-192-abc"
    const password = "Password used to encrypt data"

//KEY LENGTH IS DEPENDENT ON THE ALGORITHM. IN THIS CASE FOR AES192, IT IS 24 BYTES(92 BITS)
    const key = Crypto.scryptSync(password, 'salt', 24)

    const iv = Buffer.alloc(16, 0) //INITIALIZATION VECTOR
    
    
    

   const cipher = Crypto.createCipheriv(algorithm, key, iv) //THIS WILL RETURN A READABLE BUFFER OBJECT

   let encrypted = '';
  
cipher.on('readable', () => {
    let chunk;
    while(null !== (chunk = cipher.read())){
      encrypted += chunk.toString('hex')

    }
})

cipher.on('end', ()=>{

    console.log(encrypted)
})

cipher.write('some clear text data');
cipher.end();
   

   

//CHECKS IF CRYPTO IS SUPPORTED IN THIS VERSION OF NODE
try{
    const crypto = require('crypto')

}catch(err){

    if(err){
        console.log("This version of node does not support crypto")
    }
}