// Take 10 student inputs and marks and save them in an object.

// Output :-

// num=int(input("enter a number "))
// i=0
// a={}
// while i<num:
//     # a={}
//     name=(input("enter a name "))
//     age=int(input("enter a age "))
//     while i<len(name):
//         a.update({name:age})
//         i=i+1
//         break;
// print(a)



// { 'sonu':85, 'Kartik':90, 'Deepak':96, 'Aman':76, 'Somesh':60, 'Umesh':85, 'Amarpal':70, 'Roshan':57, 'Riyaz':98, 'Shabid':56 }

const a=require("readline-sync")
var num=a.question("enter a number ")
var i=0;
var k={}
while(i<num){
    name=a.question("enter a name ")
    age=a.questionInt("enter a age ")
    k[name]=age
    i++;
}console.log(k)


// d[i]=i**2