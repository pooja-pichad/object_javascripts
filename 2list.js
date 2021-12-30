// keys = ['Ten', 'Twenty', 'Thirty']
// values = [10, 20, 30]

// const { keyInSelect } = require("readline-sync");

// i=0
// a={}
// while i<len(keys):
//     a[keys[i]]=values[i]
//     i=i+1
// print(a)
let list1=["one","two","three","four","five"]
let list2=[1,2,3,4,5,]

var i=0;
var a={}
while(i<list2.length){
    if (i in list2){
    a[list1[i]]=list2[i]
    i++;
    }
}console.log(a)



// let list1=['one','two','three','four','five']
// let list2=[1,2,3,4,5]
// var n={}
// for (i in list2){
// n[list1[i]]=list2[i]
// }
// console.log(n);
