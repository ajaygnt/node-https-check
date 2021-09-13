const express = require('express');
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;


app.use('/', (req, res) => {
    console.log(req.protocal);
    console.log(req.IncomingMessage.encrypted);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n'+req.secure+'\n'+req.IncomingMessage.encrypted);
})
app.listen(port, () => console.log(`Listening on port ${port}...`));