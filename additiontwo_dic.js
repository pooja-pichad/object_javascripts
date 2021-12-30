let obj1 = {'a': 100, 'b': 200, 'c':300}

let obj2 = {'a': 300, 'b': 200, 'd':400}
var obj ={}
Object.keys(obj1).forEach(function(a){
  obj[a] = obj1[a] +obj2[a]

})
console.log(obj)

// let d3={...d1,...d2}
// console.log(d3)


// const obj1 = { food: 'pizza', car: 'ford' };
// const obj2 = { animal: 'dog' };

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// var o1 = { a: 12, b: 8, c: 17 },
//     o2 = { a: 2, b: 4, c: 1 },
//     keys = Object.keys(o1),
//     result = [o1, o2].reduce(function (r, o) {
//         keys.forEach(function (k) {
//             r[k] += o[k];
//         });
//         return r;
//     }, keys.reduce(function (r, k) {
//         r[k] = 0;
//         return r;
//     }, Object.create(null)));
    
// console.log(result);

