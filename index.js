const express = require("express");
const fs = require('fs');
const app = express();

app.use(express.json())

app.get('/hello',(req,res) => {
    res.send("Hello World..")
})
app.post('/student',(req,res) => {
    console.log(req.body)
    let data = JSON.stringify(req.body)
    fs.appendFile('student.txt', data,(err) =>{
        if(err){
            console.log("Error..")
        }
        else{
            res.send("Done and Saved..")
        }
    })
    
})
app.listen(4000,() =>{
    console.log('Server created..')
})