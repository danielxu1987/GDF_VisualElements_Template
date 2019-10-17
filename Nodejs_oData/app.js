
const express = require('express')
const app = express()
const port = 3000

//const oData = require('odata');
const circle = require('./circle');
const r = 3;

console.log('Circle with radius ${r} has area: ${ circle.area(r) }; ' +
                ' circumference: ${ circle.circumference(r) }.');

app.get('/', (req, res) => res.send('Hello Daniel!'));

//oData('https://opendata.cbs.nl/ODataApi/odata/37296ned/UntypedDataSet?$select=Perioden,+TotaleBevolking_1')
//    .get('resource')
//    .query({ $top: 3 })
//    .them((data) => data.send())
    //.then((data) => console.log(data));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))