const readline = "hello";
const msg=readline;
ltrcount={}
for(ltr of msg){
    if(ltr in ltrcount){
        ltrcount[ltr]+=1;
    }
    else{
        ltrcount[ltr]=1;
    }
}
console.log(ltrcount);