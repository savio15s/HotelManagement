const express = require('express')
const { ConnectionCreatedEvent } = require('mongodb')
const users = require('../models/users')
const router = express.Router()
const Users = require('../models/users')


//retrieving data
router.get('/', async(req,res) => {

    try{
          const users = await Users.find()
          res.json(users)
    }catch(err){
        res.send('Get Request')
    }
    //res.send("Hi")
})

//add data
router.post('/', async(req,res) => {
   
    const users = new Users({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        token: req.body.token,
        type: req.body.type

    })

    try{
        const u1 = await users.save()
        console.log("User Saved")
        res.json(u1)
    }catch(err){
        res.send("Error")
    }

});

//delete
router.delete('/:id',(req,res,next) => {
    Users.remove({_id: req.params.id}, function(err,result){
        if(err)
        {
            res.json(err)
        }
        else
        {
            res.json(result)
        }
    })
});

//
router.post('/putData',async(req,res) => {
    res.json(req.body)
    const users = new Users({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        type: req.body.type

    })
    console.log("Data ",users)
    users.save()
    // try{
    //     const u1 = await users.save()
    //     console.log("User Saved")
    //     res.json(u1)
    // }catch(err){
    //     res.send("Error")
    // }
})

module.exports = router
