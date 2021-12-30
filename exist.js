// Write a program to take 1 input and check whether given input exists in our object or not, if it exists print exists or else prints not exist.

// Example :

// var dict={"name":"Raju", "marks":56}


const a=require("readline-sync")
var data=a.question("entre a data")
var dict={"name":"Raju", "marks":56}

for (i in dict){
    if (i==data){
        console.log("exist")
        break;
    }else{
        console.log("not exist")
        break;
        
    }
}


// var readline = require('readline-sync');
// let n =readline.question('Enter the property name:');
// let dict={"name":"Raju", "marks":56}
// for (i in dict){
// if (i==n){
// console.log("exists");
// break
// }else{
// console.log("not exist");
// break
// }
// }