const express = require('express');
const session = require('express-session')
const authRouter = require('./auth/auth-router')
const server = express();
const restricted = require('./auth/restricted-mw')
const userRouter = require('./routers/usersRouter')



const sessionConfig = {
    name: 'cookieMonster',
    secret: process.env.SESSION_SECRET || 'keep it secret, keep it safe', //used for cookie encryption
    cookie: {
      maxAge: 1000 * 60 * 10, //good for 10 minutes in ms
      secure: false, //set to true in production. only send cookies over HTTPS
      httpOnly: true, //JavaScript cannot access the cookies on the browser. Best practice unless a real need is demostrated
  
    },
    resave: false,
    saveUninitialized: true, //read about it for GDPR compliance
}

server.use(express.json())
server.use(session(sessionConfig))
server.use('/api/restricted', restricted, authRouter)
server.use('/api', userRouter)
server.use('/', (req,res)=>{
    res.json({api: 'api is up and running'})
})

module.exports = server;