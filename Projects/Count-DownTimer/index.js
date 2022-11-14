var d= document.getElementById("day");
var h= document.getElementById("hr");
var m= document.getElementById("min");
var s= document.getElementById("sec");

var txt= document.getElementsByTagName("span");
for(a=0;a<txt.length;a++){
    console.log(txt[a].innerText);
}
var text=["Day","Hour","Minute","Second"];
var year=new Date().getFullYear()+1;
var newYear="1 Jan"+year;



function countdown(){
    const nydate=new Date(newYear);
    const currentDate=new Date();
    const msec = (nydate-currentDate)/1000;

    const dy=Math.floor(msec /3600/24);
    const hr=Math.floor((msec /3600)%24);
    const min=Math.floor(msec/ 60)%60;
    const sec=Math.floor(msec % 60);
    const ar=[];
    ar.push(dy);
    ar.push(hr);
    ar.push(min);
    ar.push(sec);
    // console.log(ar);
    check(ar);
    d.innerHTML = dy;
    h.innerHTML =timeFormat(hr);
    m.innerHTML =timeFormat(min);
    s.innerHTML =timeFormat(sec);
}
function timeFormat(t){
    return t<10 ?`0${t}`: t;
}
function check(a){
    for(i=0;i<a.length;i++){
        txt[i].innerHTML = a[i]<=1? text[i]:text[i]+"s";
    }
}
setInterval(countdown,1000);
 