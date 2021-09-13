const express = require('express');
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;


app.use('*',(req,res,next) =>{
    console.log("Came");
    console.log(req.secure);
    next();
})
app.listen(port, () => console.log(`Listening on port ${port}...`));