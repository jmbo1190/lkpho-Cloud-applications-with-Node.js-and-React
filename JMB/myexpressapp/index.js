const express = require('express');
const app = express();
const port = 8080;

app.get("/", (req,res) => {
    console.log("req.query: ")
    console.log(req.query);   // properties passed with http://localhost:8080/?property1=value1
    console.log("req.params: ");
    console.log(req.params);   // values mapped from route (none here)
    return res.send("Hello World!");
});

app.get("/user/:user", (req,res) => {
    console.log("req.query: ")
    console.log(req.query);   // properties passed with http://localhost:8080/?property1=value1
    console.log("req.params: ");
    console.log(req.params);  // values mapped from route (user=xxxx)
    return res.send(`Hello ${req.params.user}!`);
});

let server = app.listen(port, () => {
    console.log("listening at http://localhost:"+ port)
})
