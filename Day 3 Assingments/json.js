//For the Given JSON iterate over all for loops (for,for in, for of,forEach)

var person = {
    firstname: "Linkes",
    lastname: "Varun",
    age: 20,
    gender: "male"
 }; 

 for (x in person){
    console.log('The key inside the object is ' + x);
    console.log('The value for the key ' + x + ' in the person object is ' + person[x])
 }



 for (let i = 0; i < person.length; i++){
    let y = person[i];
    console.log(y);
 }