require('dotenv').config()
const express = require('express')

const app = express()
// const port = 4000

app.get('/',(req,res)=>{
    res.end('Hello world !')
})
app.get('/twitter',(req,res)=>{
    res.send(`ashutosh ranjan `)
})
app.get('/login',(req,res)=>{
    res.send('<h1>please log into chai aur code</h1>')
})
app.get('/signup',(req,res)=>{
    res.send("please sign up here bro")
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>chai aur code</h2>")
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${process.env.PORT}`)
})


