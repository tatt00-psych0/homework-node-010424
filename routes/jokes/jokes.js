const jester = require("jester-jokes")

const getJoke = (req, res) => {
    res.send(jester.getJoke()).status(200);
}

module.exports = getJoke;