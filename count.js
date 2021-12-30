// Count the values of an object property; mostly they contain lists as values.

// Inp/ut :-

var dict = {

'Alex': ['subj1', 'subj2', 'subj3'],

'David': ['subj1', 'subj2']

}

// Output :-

// total count:5
var count=0;
for(i in dict){
    for(j in dict[i]){
        count++;

    }
}console.log(count)
