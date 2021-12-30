// You need to count the number of occurrences of each unique character of a word "MISSISSIPPI" and store them in 
// an object in key, value pairs.
// const list1=[]
// const word="MISSISSIPPI"
// let output={}
// for (var i of word) {
// if(list1.includes(i)){
// output[i]=output[i]+1

// }else{
// list1.push(i);
// output[i]=1;
// }
// }
// console.log(output);

const list=[]
const word="MISSISSIPPI";
let a={}
for (var i of word){
    if(list.includes(i)){
        a[i]=a[i]+1
    }else{
        list.push(i)
        a[i]=1
    }
}console.log(a)