const a=require("readline-sync")
var number=a.questionInt("enter a number")
var i=0;
while(i<=10){
    console.log(i*number)
    i++;
}