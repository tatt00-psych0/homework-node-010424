const express = require("express");
const app = express();
const port = 3001;
const encrypt = require("./routes/encrypt/encrypt")
const decrypt = require("./routes/decrypt/decrypt")
const jokes = require("./routes/jokes/jokes")

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

app.get("/encrypt", encrypt);
app.get("/decrypt", decrypt);
app.get("/jokes", jokes);
