// Write a “person” class to hold all the details.

class person {
   constructor (name, age, gender, occupation) {
       this.name = name;
       this.age = age;
       this.gender = gender;
       this.occupation = occupation;
   }
}

let details = new person ("Linkes Varun", 20 , "Male", "Student" );
console.log(details.occupation);
