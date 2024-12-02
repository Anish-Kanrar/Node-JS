//Express: Fast, unopinionated, minimalist web framework for Node.js

const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    return res.send("Hello From Home Page");
});

app.get("/about", (req, res) => {
    //return res.send("Hello From About Page" + " Hey " + req.query.name+ " you are "+ req.query.age);
    return res.send(`Hello ${req.query.name}`);
});

app.listen(8000, () => console.log("Server Started!"));
