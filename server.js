const express = require('express');
const authRouter = require('./auth-router')
const server = express();
server.use(json())

server.use('/api', authRouter);
server.use('/', (req,res)=>{
    res.json({api: 'api is up and running'})
})

module.exports = server;