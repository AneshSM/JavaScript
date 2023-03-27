
function opennav(params) {
    const opn=document.getElementById("side-bar");
    const cls=document.getElementById("close");
    opn.style.display="flex";
    opn.style.position="absolute";
    opn.style.left=0;
    opn.style.width="60%";

    cls.style.display="flex";
}
function closenav(params) {
    const opn=document.getElementById("side-bar");
    const cls=document.getElementById("close");
    opn.style.display="none";
    opn.style.position="unset";
    opn.style.left=0;
    opn.style.width="15%";

    cls.style.display="none";
}