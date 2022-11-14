const days=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur"];
var d=new Date();

function setDate(d){
    return new Date(...arguments);
}
function setDateStr(s){
    return new Date(s);
}

let date=d.getDate();
let day =d.getDay();
let milisec1970=d.getTime();