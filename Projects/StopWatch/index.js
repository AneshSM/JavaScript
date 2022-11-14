
// --------------------------------------------------------------------Timer ---------------------------------------------------------------------


const paly = "fa-play";
var status = "start";
var play="fa-play";
var pause="fa-pause";

var tap = document.getElementById("startstop");

tap.classList.add("fa-solid");
tap.classList.add("fa-play");


var lap = document.getElementById("lap");

lap.style.visibility="hide";
lap.style.display="none";



function playstop() {
    checkStatus(status);
    if (status === "start") {
        tap.className="";
        tap.className="fa-solid ";
        tap.classList.add(pause);
        lap.style.visibility="visible";
        lap.style.display="flex";
        status="pause";
    }else if (status === "pause") {
        tap.className="";
        tap.className="fa-solid ";
        tap.classList.add(paly);
        lap.style.visibility="hide";
        lap.style.display="none";
        status="start";
    }
    console.log(tap.className);
}


var c=0;
var cmin=0,csec=0,chr=0;
var si;

var tsec=document.getElementById("sec");
var tmin=document.getElementById("min");
var thr=document.getElementById("hr");

tmin.innerHTML="00:";
tsec.innerHTML="00";



function checkStatus(s){
    if (s === "start") {
        si=setInterval(count,10);
    }else if (s === "pause") {
        clearInterval(si);
    }
}


function count(){
    c++;
    if(c>100){
        csec++;
        c=0;
    }
    if(csec==60){
        cmin++;
        csec=0;
    }
    if(cmin==60){
        chr++;
        cmin=0;
    }
    if(chr!=0){
        thr.innerHTML=((chr<10)?"0"+chr:chr)+":";
        tmin.innerHTML=((cmin<10)?"0"+cmin:cmin)+":";
        tsec.innerHTML=(csec<10)?"0"+csec:csec;
    }
    else{
        tmin.innerHTML=((cmin<10)?"0"+cmin:cmin)+":";
        tsec.innerHTML=(csec<10)?"0"+csec:csec;
    }
}


function  reset(){
    clearInterval(si);
    tmin.innerHTML="00:";
    tsec.innerHTML="00";
    cmin=0,csec=0,chr=0;
    tap.className="";
    tap.className="fa-solid ";
    tap.classList.add(paly);
    rec.innerHTML="";
    lap.style.visibility="hide";
    lap.style.display="none";
    n=0;
    beg="";
    con="";
    num="";
    n=0;
    nchr=0;
    ncmin=0;
    ncsec=0;
}


var rec=document.getElementById("record"), beg="", con="", num="", n=0, nchr=0,ncmin=0,ncsec=0;


function laps(){
    n++;
    num="#"+n+"\t";
    beg=nchr+'.'+ncmin+'.'+ncsec+"\t";
    con=chr+'.'+cmin+'.'+csec+"<br>";
    nchr=chr-nchr;
    ncmin=cmin-ncmin;
    ncsec=csec-ncsec;
    rec.innerHTML=num+beg+con+rec.innerHTML;
}