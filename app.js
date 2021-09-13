const express = require('express');
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;


app.use('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n'+req.secure);
})
app.listen(port, () => console.log(`Listening on port ${port}...`));