function addition(array){
   let sum=0;
   for(let i=0;i<array.length;i++){
   sum +=array[i];
   }
   return sum;
}
let array=[1,4,9,7,5];
let result=addition(array);
console.log(result);