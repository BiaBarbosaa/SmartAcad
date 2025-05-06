//chave asinatura para validar o tokem

const crypto =require('crypto');

//chave aleatoria
const secret = crypto.randomBytes(64).toString('hex');

console.log(secret);