const db = require('../dbConfig')

module.exports = {

}

function getUsers(){
    return db('users')
}

function login(credentials){
    return db('users').where({username: credentials.username} && {password: credentials.password})
}

function registerUser(user){
    return db('users').insert(user)
}

