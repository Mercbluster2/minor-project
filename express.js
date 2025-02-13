const express = require("express");
const app = express();
const users = [
    {
        name : "John",
         kidneys: [
            {
                healthy: false
            }
        ]
    }
];
app.get("/", function(req,res){
    res.send("hi there");
})
app.post("/", function(req,res){
    
})
app.put("/", function(req,res){
    
})
app.delete("/", function(req,res){
    
})
app.listen(3001);