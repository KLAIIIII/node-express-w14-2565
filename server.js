const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();

const PORT = process.env.PORT || 4000
const sever = http.createServer(app)

// Bady-parser middleware
app.use(bodyParser.urlencoded({extends:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("Home")
})

// http://localhost:4000
app.listen(400,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})