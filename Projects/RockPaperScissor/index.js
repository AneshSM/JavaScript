var invoke = function (event){
    var user= event.innerHTML;
    const arr = { '🪨': 0, '📰': 1, '✂️': 2,0:'🪨', 1:'📰', 2:'✂️'};
    let msg = 'none';
    const comp = Math.floor(Math.random() * 3);
    console.log(user,arr[comp]);
    let usr=arr[user];
    for (a in arr) {
        if (comp === usr) 
            msg = 'Draw';
        else{
            
        }
    }
    // alert(msg);
};
function retry(params) {
    location.reload();
}