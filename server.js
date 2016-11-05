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

//for heroku compatibility
app.set('port', (process.env.PORT || 8080))

//home page
app.use('/', express.static('public'));

//handle the get request
app.get('/:date', function(req, res) {
    //store request
    var input = req.params.date;
    var date;
    
    if(parseInt(input)){
        date = new Date(parseInt(input));       
    } else {
        date = new Date(input);
    }

    var dateObj = {
        unix: date.getTime(),
        natural: date.getTime() ? months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() : null
    }
    
    res.send(JSON.stringify(dateObj));
});

app.listen(app.get(port);
