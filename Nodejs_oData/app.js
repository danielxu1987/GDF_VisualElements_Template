
const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => res.send('Hello Daniel!' + outputString));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


//--------- Code below is for instructional purpose only, not important-----------
