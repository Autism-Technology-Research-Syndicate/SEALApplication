const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('<h1>Hello from server</h1>')
})

app.listen(5000, () => {
    console.log('Port is listening.');
});


