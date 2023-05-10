const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.static(`${__dirname}/public`))

app.get('/api/cat', (req, res) => res.send('barb'))
app.get('/api/dog', (req, res) => res.send('cool'))

app.listen(4000, 
    () => console.log(`server running on 4004`)
)