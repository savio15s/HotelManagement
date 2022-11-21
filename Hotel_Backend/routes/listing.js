const express = require('express')
const Listing = require('../models/listing')
const router = express.Router()



//retrieving data
router.get('/', async(req,res) => {

    try{
          const listing = await Listing.find()
          res.json(listing)
    }catch(err){
        res.send('Get Request')
    }
    //res.send("Hi")
})

router.get('/:id', async(req,res) => {

    try{
          const listing = await Listing.find({"listing_id":req.params.id})
          res.json(listing)
    }catch(err){
         res.send(err)
    }
    //res.send("Hi")
})

router.post('/', async(req,res) => {
   
    const listing = new Listing({
        
        listing_id: req.body.listing_id,
        listing_title: req.body.listing_title,
        destination: req.body.destination,
        street: req.body.street,
        city: req.body.city,
        postal_code: req.body.postal_code,
        price: req.body.price,
        email: req.body.email,
        username: req.body.username,
        type: req.body.type,
        created: req.body.created,
        token: req.body.token
    })

    try{
        const l1 = await listing.save()
        console.log("Listing Saved")
        res.json(l1)
    }catch(err){
        res.send("Error")
    }

});

module.exports = router