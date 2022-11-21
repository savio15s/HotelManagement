const express = require('express');
const Booking = require('../models/booking');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings)
  }
  catch (err) {
    console.log(err);
  }
})


router.get('/:username', async(req,res) => {

  try{
        const booking = await Booking.find({"username":req.params.username})
        res.json(booking)
  }catch(err){
       res.send(err)
  }
  //res.send("Hi")
})


router.post('/', async (req, res) => {
  
    const booking = new Booking({
        listing_id: req.body.listing_id,
        booking_id: req.body.booking_id,
        booking_start: req.body.booking_start,
        booking_end: req.body.booking_end,
        booking_date: req.body.booking_date,
        username: req.body.username
      })

      try {
        const b1 = await booking.save()
        console.log("Booking saved")
        res.json(b1)
      }catch(err){
        res.send("Booking Error")
      }


    })

module.exports = router
