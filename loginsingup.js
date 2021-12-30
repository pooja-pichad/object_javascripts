console.log("WELCOME TO LOGIN AND SING UP PAGE")
const { json } = require("node:stream/consumers")
const a=require("readline-sync")
var singup=a.question("enter a 1 for singup or enter a 2 for login:")
if (singup=="1"){
    mobileno=a.questionInt("enter your mobile number ")
    if(mobileno>0){
        console.log("resister ")
    }else{
        console.log("alreday exist mb")
    }
    username=a.question("enter your username ")
    passwrod=a.questionInt("create a passwrod ")
    if(passwrod>0 || password>"A"||password<"Z"){
        console.log("confrom the password")
    }

    cofirmpasswrod=a.questionInt("confrom your passwrod ")
    if(passwrod==cofirmpasswrod){
        console.log("created successfully")
    }

    dict={"mobilenumber":mobileno,"username":username,"password":cofirmpasswrod}
    var dict1=JSON.parse(dict)
    var fs=require("fs")
    fs.writeFile("login.json",dict1)


}