function StringCount(string){
    let count=0;
    for(i=0;i<string.length;i++){
    if(string[i].length>=5){
        count++;
    }
  }
  return count;
}
const string=["solvendo","was","started","in","2019","and","the","indian","setup","was","in","bengaluru"];
let result=StringCount(string);
console.log(result);