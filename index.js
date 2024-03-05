// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api", (req, res) => {
  let date = new Date();

  const unix = date.getTime();

  if(unix) {
    let weekday;
    if(date.getDay() === 0) {
      weekday = "Sun";
    } else if(date.getDay() === 1) {
      weekday = "Mon";
    } else if(date.getDay() === 2) {
      weekday = "Tue";
    } else if(date.getDay() === 3) {
      weekday = "Wed";
    } else if(date.getDay() === 4) {
      weekday = "Thu";
    } else if(date.getDay() === 5) {
      weekday = "Fri";
    } else if(date.getDay() === 6) {
      weekday = "Sat";
    }
  
    let monthDay;
    if(date.getDate() < 10) {
      monthDay = `0${date.getDate()}`;
    } else {
      monthDay = date.getDate();
    }
  
    let month;
    if(date.getMonth() === 0) {
      month = "Jan";
    } else if(date.getMonth() === 1) {
      month = "Feb";
    } else if(date.getMonth() === 2) {
      month = "Mar";
    } else if(date.getMonth() === 3) {
      month = "Apr";
    } else if(date.getMonth() === 4) {
      month = "May";
    } else if(date.getMonth() === 5) {
      month = "Jun";
    } else if(date.getMonth() === 6) {
      month = "Jul";
    } else if(date.getMonth() === 7) {
      month = "Aug";
    } else if(date.getMonth() === 8) {
      month = "Sep";
    } else if(date.getMonth() === 9) {
      month = "Oct";
    } else if(date.getMonth() === 10) {
      month = "Nov";
    } else if(date.getMonth() === 11) {
      month = "Dec";
    }
  
    const year = date.getFullYear();
  
    let hours;
    if(date.getHours() < 10) {
      hours = `0${date.getHours()}`;
    } else {
      hours = date.getHours();
    }
  
    let minutes;
    if(date.getMinutes() < 10) {
      minutes = `0${date.getMinutes()}`;
    } else {
      minutes = date.getMinutes();
    }
  
    let seconds;
    if(date.getSeconds() < 10) {
      seconds = `0${date.getSeconds()}`;
    } else {
      seconds = date.getSeconds();
    }
  
    const utc = `${weekday}, ${monthDay} ${month} ${year} ${hours}:${minutes}:${seconds} GMT`;
  
    res.json({ unix: unix, utc: utc });
  } else {
    res.json({ error: "Invalid Date" });
  }
});
// your first API endpoint... 
app.get("/api/:date", function (req, res) {
  let { date } = req.params;
  if(Number(date)) {
    date = new Date(Number(date));
  } else {
    date = new Date(date);
  }

  const unix = date.getTime();

  if(unix) {
    let weekday;
    if(date.getDay() === 0) {
      weekday = "Sun";
    } else if(date.getDay() === 1) {
      weekday = "Mon";
    } else if(date.getDay() === 2) {
      weekday = "Tue";
    } else if(date.getDay() === 3) {
      weekday = "Wed";
    } else if(date.getDay() === 4) {
      weekday = "Thu";
    } else if(date.getDay() === 5) {
      weekday = "Fri";
    } else if(date.getDay() === 6) {
      weekday = "Sat";
    }
  
    let monthDay;
    if(date.getDate() < 10) {
      monthDay = `0${date.getDate()}`;
    } else {
      monthDay = date.getDate();
    }
  
    let month;
    if(date.getMonth() === 0) {
      month = "Jan";
    } else if(date.getMonth() === 1) {
      month = "Feb";
    } else if(date.getMonth() === 2) {
      month = "Mar";
    } else if(date.getMonth() === 3) {
      month = "Apr";
    } else if(date.getMonth() === 4) {
      month = "May";
    } else if(date.getMonth() === 5) {
      month = "Jun";
    } else if(date.getMonth() === 6) {
      month = "Jul";
    } else if(date.getMonth() === 7) {
      month = "Aug";
    } else if(date.getMonth() === 8) {
      month = "Sep";
    } else if(date.getMonth() === 9) {
      month = "Oct";
    } else if(date.getMonth() === 10) {
      month = "Nov";
    } else if(date.getMonth() === 11) {
      month = "Dec";
    }
  
    const year = date.getFullYear();
  
    let hours;
    if(date.getHours() < 10) {
      hours = `0${date.getHours()}`;
    } else {
      hours = date.getHours();
    }
  
    let minutes;
    if(date.getMinutes() < 10) {
      minutes = `0${date.getMinutes()}`;
    } else {
      minutes = date.getMinutes();
    }
  
    let seconds;
    if(date.getSeconds() < 10) {
      seconds = `0${date.getSeconds()}`;
    } else {
      seconds = date.getSeconds();
    }
  
    const utc = `${weekday}, ${monthDay} ${month} ${year} ${hours}:${minutes}:${seconds} GMT`;
    res.json({ unix: unix, utc: utc });
  } else {
    res.json({ error: "Invalid Date" });
  }
});



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
