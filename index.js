// const { Router } = require('express')
const express = require('express') //express
const http = require('http') //node.js
const morgan = require('morgan')
const app = express()
const Route = express.Router()
const sever = http.createServer(app)

const PORT = process.env.PORT || 4000
app.use(morgan('dev'))
// 4.Buil-in
app.use(express.json())
const Router = express.Router()

// Application-level middleware
// app.get((req,res,next)=>{
//     console.log('Time:',Date(Date.now()))
//     next()
// })

Route.use('/',(req,res,next)=>{
    console.log('This is a Router middleware')
    next()
})

app.use('/',Router)

Route.use('/home',(req,res,next)=>{
    // res.send("Home")
    res.json({
        message:true,
        app:"express-Router",
    })
})

// app.use(myLogger)

// Router-level middleware
//register route
//GET:http://localhost:4000
app.get('/profile',(req,res,next)=>{
    // res.status(200).send({message:"Home Page"})
    console.log("profile")
    res.send("Profile")
    next()
})

app.get('/contact',(req,res)=>{
    res.status(200).json({
        message:"Contact page"
    })
})

//GET:http://localhost:4000/user/id
app.get('/user/:id([a-d,0-3](4))',(req,res)=>{
    res.status(200).send(`ID is:`+req.params.id)
})

//GET:http://localhost:4000/user/mark
app.get('/user/:name/:id',(req,res)=>{
    res.status(200).send(`Name is:${req.params.name}, ID is:${req.params.id}`)
})

//http://localhost:4000
sever.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})