// Try JSON parsing

// read json from file synchronous parsing
const fs = require('fs');

//const fileJsonData = fs.readFileSync('./totalpopulation_annual.json', 'utf8');

//try{
//	const data = JSON.parse(fileJsonData);
//	console.log(data.value);
//} catch (err) {
//	console.error(err);
//}

// read json from file async 
fs.readFile('./totalpopulation_annual.json', 'utf8', (err, fileContents) => {
    if (err) {
        console.error(err);
        return
    }
    try {
        const countPeriodForTable = 6;
        const data = JSON.parse(fileContents);
        var tableData = new Array(countPeriodForTable);
        const jArrayLength = data.value.length;
        tableData = data.value.slice(jArrayLength - countPeriodForTable, jArrayLength)
        console.log(tableData);

    } catch (err) {
        console.error(err);
    }
});


//const adhocJsondata = '{ "name": "Flavio", "age": 35 }';

//// Synchronous parsing of adhoc json string
//try {
//	const user = JSON.parse(adhocJsondata);
//	console.log('User age is: ' + user.age);
//} catch (err) {
//	console.error(err);
//}

//// Asynchronous parsing of adhoc json string
//const parseJsonAsync = (jsonString) => {
//	return new Promise(resolve => {
//		setTimeout(() => {
//			resolve(JSON.parse(jsonString))
//		})
//	})
//};
//parseJsonAsync(adhocJsondata).then(jsonData => console.log(jsonData));

//------------Understand package reference e.g. require--------
//const circle = require('./circle');
//const r = 3;
//var area = circle.area(r);
//var circumf = circle.circumference(r);
//var outputString = 'Circle with radius ' + r +
//    ' has area: ' + area + '; circumference: ' + circumf;
//console.log(outputString);

//-------------Odata query example with o.js----------
//const o = require('odata');
//var statlineUrl = 'https://opendata.cbs.nl/ODataApi/odata/37296ned/UntypedDataSet?$select=Perioden,+TotaleBevolking_1';
//// promise example
//o(statlineUrl)
//    .get('resource')
//    .then((data) => console.log(data));