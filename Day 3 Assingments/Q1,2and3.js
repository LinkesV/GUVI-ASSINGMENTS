// 1. How to compare two JSON have the same properties wwithout order 

let obj1 = {
   name:"Person 1",
   age: 5
};

let obj2 = {
   age : 5,
   name: "Person 2"
}

let objEqual = false;

// Regardless of order if 2 JSON have same properties and same keys the console will return a true value 
const obj1Keys = Object.keys(obj1).sort();
const obj2Keys = Object.keys(obj2).sort();
if (obj1Keys.length !== obj2Keys.length) {
  console.log(objEqual);
} else {
  const areEqual = obj1Keys.every((key, index) => {
    const objValue1 = obj1[key];
    const objValue2 = obj2[obj2Keys[index]];
    return objValue1 === objValue2;
  });
  if (areEqual) {
    objEqual = true;
    console.log(objEqual);
  } else {
    console.log(objEqual);
  }
}




let url = 'https://restcountries.com/v3.1/all';

let fetchUrl = fetch(url)
fetchUrl.then((res) => res.json()).then((countrydetails) => {
    
 // Use the rest Countries API and display all the country flag on the console

    countrydetails.forEach(element => {
        console.log(`Flag: ${element.flags.png}`)
    });
 // Use same rest countries and print all the countries names,regions, sub-region and populations
    countrydetails.forEach(element => {
      console.log(`Name: ${element.name.official} Region:${element.region} Subregion:${element.subregion} Population:${element.population}`)
  });



    });