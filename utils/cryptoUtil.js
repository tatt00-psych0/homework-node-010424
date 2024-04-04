const crypto = require("crypto");
const algo = 'aes256';
const key = 'password';


const encryptText = (text) => {
    const cipher = crypto.createCipher(algo, key)
    const encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
    return encrypted;
};

const decryptText = (text) => {
    const decipher = crypto.createDecipher(algo, key)
    const decrypted = decipher.update(text, 'hex', 'utf8') + decipher.final('utf8');
    return decrypted;
}; 

module.exports = {
    encryptText, decryptText
}