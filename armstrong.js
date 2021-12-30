// 
const a=require("readline-sync")
var number=a.questionInt("enter a number")
var sum=0;
x=number;
while(number>0){
    sum=sum+(number%10)*(number%10)*(number%10)
    number=parseInt(number/10)

}if(sum==x){
    console.log("its is armstrong number")

}else{
    console.log("not armstrong")
}

// program to check an Armstrong number of three digits

// let sum = 0;
// const number = questionInt('Enter a three-digit positive integer: ');

// // create a temporary variable
// let temp = number;
// while (temp > 0) {
//     // finding the one's digit
//     let remainder = temp % 10;

//     sum += remainder * remainder * remainder;

//     // removing last digit from the number
//     temp = parseInt(temp / 10); // convert float into integer
// }
// // check the condition
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }