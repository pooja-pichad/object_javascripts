// Write a programme to generate and print a dictionary that contains a number (between 1 and n) in the form (x, x*x).

// Sample input (n = 5) :

// Output : {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}.

var n=5;
var i=1;
d={}
while(i<=n){
    d[i]=i**2
    // console.log(d)
    i++;
}console.log(d)