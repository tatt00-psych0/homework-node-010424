const enUtil = require("../../utils/cryptoUtil");

const encrypted = (req, res) => {
    res.send(enUtil.encryptText(req.query.text)).status(200);
    
}

module.exports = encrypted;