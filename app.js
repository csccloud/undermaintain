const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

app.options('*', cors());

app.post("/", function(req, res){
    res.set('access-control-allow-headers', '*');
    res.set('access-control-allow-methods', '*');
    res.set('access-control-allow-origin', '*');
    res.send('UNDER MAINTAINANCE');
});

app.all("*", function(req,res){
    res.sendStatus(404);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
