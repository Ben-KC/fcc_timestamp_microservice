var express = require('express');

var app = express();

//month array
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

//home page
app.get('/', function(req, res) {
    
});

//handle the get request
app.get('/:date', function(req, res) {
    //store request
    var input = req.params.date;
    var date;
//TODO handle incorrect request (return nulls) and write an index.html
    //check format
    if(parseInt(input)){
        date = new Date(parseInt(input));       
    } else {
        date = new Date(input);
    }

    var dateObj = {
        unix: date.getTime(),
        natural: months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
    }
    
    res.send(JSON.stringify(dateObj));
});

app.listen("8080");
