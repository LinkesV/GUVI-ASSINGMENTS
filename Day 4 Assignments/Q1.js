//How to comapre two Json that have the same properties without order

// Answer --> we can use an in built sort function on the 2 json first before comapring them


let obj1 = {name:"Person 1",age:5};
let obj2 = {age:5,name:"Person 1"};


const orderedobj1 = Object.keys(obj1).sort().reduce((obj,key) => {
   obj[key] = obj1[key];
   return obj
})

const orderedobj2 = Object.keys(obj2).sort().reduce((obj,key) => {
   obj[key] = obj2[key];
   return obj
})


if (orderedobj1 == orderedobj2){
   console.log('Both are the same');
}
