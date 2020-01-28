const bc = require('bcryptjs')
const router = require('express').Router()
const restricted = require('../auth/restricted-mw')
const Users = require('../data/helpers/usersModel')

router.get('/users', (req, res)=> {
    Users.find()
      .then(users=>{
        res.status(200).json(users)
      })
      .catch(()=>{
        res.status(500).json({message: 'failed to get users list'})
      })
})


  
  module.exports = router