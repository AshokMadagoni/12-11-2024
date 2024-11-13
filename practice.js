// let date=new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.setFullYear(2025));
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleTimeString());


// let a={
//     id:1,
//     name:"ashok",
//     age:20,
//     details:function (){
//         console.log(this);
//     }
    
// }
// console.log(a.details());


// call method

// let b={
//     id:1,
//     name1:"goud",
//     age:21
// }
// let c=function (){
//     console.log(this);
// }
// c.call(b)


// apply method

let a1={
    id:1,
    age:22,
    name2:"madagoni"
}
let b1=function(x,y){
    console.log(this.name2+x+y);
}
b1.apply(a1,[1,2,3,4])

// // bind method

//  let a1={
//         id:1,
//         age:22,
//         name2:"madagoni"
//     }
//     let b1=function(x){
//         console.log(this.name2+x);
//     }
// let c=b1.bind(a1,[2,3,4,5])
// c()