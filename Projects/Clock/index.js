var d = new Date();
var hr = d.getHours();
var min = d.getMinutes();
const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Satur"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var day = days[d.getDay()];
var date = d.getDate();
var mon = months[d.getMonth()];
hr = (hr > 12) ? hr - 12 : hr;
hr = (hr < 10) ? '0' + hr : hr;
min = (min < 10) ? '0' + min : min;


function setTime() {
    let t = hr + ":" + min;
    let d = day + ', ' + mon + ' ' + date;
    document.getElementById("time").innerHTML = t;
    document.getElementById("date").innerHTML = d;
}
setInterval(setTime, 1000);