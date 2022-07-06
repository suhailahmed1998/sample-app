const express = require("express");
const app = express()

app.get('/',(req, res) => res.send('Hello World'));

app.listen(3000, () => {
    console.log('My API is Running at port 3000');
});


