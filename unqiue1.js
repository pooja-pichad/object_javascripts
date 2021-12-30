var array=[ {"first":"1"}, {"second": "2"}, {"third": "1"}, {"four": "5"}, {"five":"5"}, {"six":"9"}, {"seven":"7"} ]
// b=[]
// for (i in number){
//     for (j in number){

//     }
// }


var distinct = []
for (var i = 0; i < array.length; i++){
   if (array[i]  in distinct){
      distinct.push(array[i])

}
}console.log(distinct)