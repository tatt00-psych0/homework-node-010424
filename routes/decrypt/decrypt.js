const enUtil = require("../../utils/cryptoUtil");



const decrypted = (req, res) => {
    res.send(enUtil.decryptText(req.query.text)).status(200);
    
}

module.exports = decrypted;