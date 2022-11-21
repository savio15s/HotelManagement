const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const path = require('path')
const url = 'mongodb://127.0.0.1:27017/Users'
const con = mongoose.connection
const port = 3000

const app = express()

const usersRouter = require('./routes/users')
const listingRouter = require('./routes/listing')
const bookingRouter = require('./routes/booking')

const exp = require('constants')

// mongoose.connect(url, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
// });
                                            //connect to mongodb
mongoose.connect(url)

//on connection
con.on('connected',function(){

    console.log("Connected to database..")
})

con.on('error',function(err){
    
    if(err)
    {
        console.log("Error in Database Connection:" +err)
    }
})

//app.use(express.json())
//adding middleware cors
app.use(cors())

//body-parse
app.use(bodyparser.json())

//static files
app.use(express.static(path.join(__dirname,'public')))

//routes
app.use('/users',usersRouter)
app.use('/listing',listingRouter)
app.use('/booking',bookingRouter)

//testing server
app.get('/getData',(req,res)=>{
    res.json({
        "statusCode":200,
        "statusMessage": "SUCCESS"
    })
});

app.post('/putData',(req,res) => {
    res.json(req.body)
})

app.listen(port, ()=>{

    console.log("Server Started")
})
