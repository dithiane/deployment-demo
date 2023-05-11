require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
app.use(cors())
app.use(express.static('public'))

const {ROLLBAR_ACCESS_TOKEN} = process.env

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: `${ROLLBAR_ACCESS_TOKEN}`,
  captureUncaught: true,
  captureUnhandledRejections: true
});

rollbar.log("Hello world!");


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'/public/index.html'))
})

app.listen(4000, 
    () => console.log(`server running on 4000`)
)