const readline = "The loop will iterate over all enumerable properties of the object itself and those the object inherits from its prototype chain (properties of nearer prototypes take precedence over those of prototypes further away from the object in its prototype chain).";
const msg=readline.split(" ");
wordcount={}
for(word of msg){
    if(word in wordcount){
        wordcount[word]+=1;
    }
    else{
        wordcount[word]=1;
    }
}
console.log(wordcount);