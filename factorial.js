// num=int(input("enter a number "))
// i=1
// while num>0:
//     i=i*num
//     num=num-1
// print("factorial=",i)


// const a=require("readline-sync")
// var number=a.questionInt("enter a number ")
// var k="";
// var i=1;
// while (number>1){
//     i=i*number
//     number=number-1
//     k=k+i+" +" 
//     // break;
//     // console.log(i)
//     // console.log(i+k)
 
//     // console.log(k)
// }
// console.log(k)



const a=require("readline-sync")
var number=a.questionInt("enter a number ")
var k="";
var i=1;
while (number>1){
    i=i*number
    number=number-1
    // k=k+i
    // console.log(i)
    if (i!=number.length-1){
        console.log("+")
    }
    i=i+1
    
}
console.log(i)